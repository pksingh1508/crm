"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Button from "../ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, signOut, loading } = useAuth();

  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/contacts", label: "Contacts" }
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const handleLogout = async () => {
    setIsUserMenuOpen(false);
    await signOut();
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <img src="/euLogo.jpeg" alt="EU Logo" className="h-12 w-12" />
            <div className="text-3xl font-bold text-gray-700">CRM</div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex md:items-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <div className="flex items-baseline space-x-4">
              {user &&
                navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActiveLink(link.href)
                        ? "bg-yellow-200 text-gray-700"
                        : "text-gray-700 hover:text-gray-600 hover:bg-yellow-200"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
            </div>
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center justify-center h-8 w-8 rounded-full bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  <span className="text-gray-700 font-medium">
                    {user.email?.charAt(0).toUpperCase()}
                  </span>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-2 ring-yellow-500 ring-opacity-5 hover:bg-yellow-100 transition-colors z-50">
                    <div className="py-1">
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 cursor-pointer"
                        disabled={loading}
                      >
                        {loading ? "Signing out..." : "Sign out"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/auth">
                <Button size="sm">Sign In</Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          {user &&
            navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActiveLink(link.href)
                    ? "bg-yellow-200 text-gray-700"
                    : "text-gray-700 hover:text-gray-600 hover:bg-yellow-200"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

          {/* Mobile Auth Section */}
          <div className="border-t border-gray-200 pt-3 mt-3">
            {user ? (
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-yellow-600 flex items-center justify-center">
                    <span className="text-gray-700 font-medium">
                      {user.email?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600"
                  disabled={loading}
                >
                  {loading ? "Signing out..." : "Sign out"}
                </button>
              </div>
            ) : (
              <Link href="/auth" onClick={() => setIsMenuOpen(false)}>
                <Button size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
