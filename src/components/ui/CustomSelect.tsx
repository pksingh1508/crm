"use client";

import { useState, useRef, useEffect } from "react";
import { SelectProps } from "@/types";

export default function CustomSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
  error,
  required = false,
  disabled = false,
  className = ""
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    () => options.find((option) => option.value === value) || null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownListRef = useRef<HTMLDivElement>(null);

  // Update selectedOption when value changes
  useEffect(() => {
    const option = options.find((option) => option.value === value);
    setSelectedOption(option || null);
  }, [value, options]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle dropdown scrolling and prevent page scroll when open
  useEffect(() => {
    if (!isOpen) return;

    // Prevent page scroll when dropdown is open
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    const handleWheel = (event: WheelEvent) => {
      // If the wheel event is happening inside the dropdown list, let it scroll naturally
      if (
        dropdownListRef.current &&
        dropdownListRef.current.contains(event.target as Node)
      ) {
        // Let the dropdown handle its own scrolling
        return;
      }

      // For all other scroll events, prevent page scrolling
      event.preventDefault();
      event.stopPropagation();

      // If mouse is over the dropdown container but not the list, scroll the list
      if (dropdownRef.current?.contains(event.target as Node)) {
        if (dropdownListRef.current) {
          dropdownListRef.current.scrollTop += event.deltaY;
        }
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.body.style.overflow = originalStyle;
      document.removeEventListener("wheel", handleWheel);
    };
  }, [isOpen]);

  const handleSelect = (option: { value: string; label: string }) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };

  const selectStyles = `
    w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm 
    bg-white text-gray-900 cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    disabled:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-500
    ${error ? "border-red-500 focus:ring-red-500" : ""}
    ${className}
  `;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative" ref={dropdownRef}>
        <div
          className={selectStyles}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          role="button"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <div className="flex items-center justify-between">
            <span
              className={selectedOption ? "text-gray-900" : "text-gray-500"}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {isOpen && (
          <div
            ref={dropdownListRef}
            className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto"
            onWheel={(event) => {
              // Ensure dropdown scrolling works properly
              event.stopPropagation();
            }}
          >
            {options.map((option) => (
              <div
                key={option.value}
                className={`px-3 py-2 cursor-pointer transition-colors ${
                  option.value === value
                    ? "bg-blue-50 text-blue-900"
                    : "text-gray-900 hover:bg-gray-100"
                }`}
                onClick={() => handleSelect(option)}
                role="option"
                aria-selected={option.value === value}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
