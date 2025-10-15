import { InputProps } from "@/types";

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  className = ""
}: InputProps) {
  const inputStyles = `
    w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm 
    bg-white text-gray-900
    placeholder-gray-400 
    focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent
    disabled:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-500
    ${error ? "border-red-500 focus:ring-red-500" : ""}
    ${className}
  `;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={inputStyles}
        style={{
          backgroundColor: "white",
          color: "#374151", // gray-700
          WebkitTextFillColor: "#374151" // Fixes autofill text color
        }}
      />

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
