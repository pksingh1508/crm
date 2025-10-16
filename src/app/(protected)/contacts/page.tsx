"use client";

import { ProtectedRoute } from "@/components/auth";
import { Contact } from "@/types";
import { supabase } from "@/lib/supabase";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const itemsPerPage = 20;
  const router = useRouter();

  const fetchContacts = async (page: number) => {
    try {
      setLoading(true);

      // Calculate the range for pagination
      const from = (page - 1) * itemsPerPage;
      const to = from + itemsPerPage - 1;

      // Fetch contacts with pagination
      const { data, error, count } = await supabase
        .from("contacts")
        .select("*", { count: "exact" })
        .order("created_at", { ascending: false })
        .range(from, to);

      if (error) {
        console.error("Error fetching contacts:", error);
        return;
      }

      setContacts(data || []);
      setTotalCount(count || 0);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts(currentPage);
  }, [currentPage]);

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Contacts</h1>
            <p className="text-gray-600">
              Manage and view all your contacts ({totalCount} total)
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          )}

          {/* Contacts Table */}
          {!loading && (
            <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gradient-to-r from-yellow-50 to-yellow-100">
                    <tr>
                      <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                        Name
                      </th>
                      <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                        Email
                      </th>
                      <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                        Phone
                      </th>
                      <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                        I am
                      </th>
                      <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                        Description
                      </th>
                      <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                        Email Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {contacts.length === 0 ? (
                      <tr>
                        <td
                          colSpan={6}
                          className="px-8 py-16 text-center text-gray-500 bg-gray-50"
                        >
                          <div className="flex flex-col items-center">
                            <svg
                              className="w-12 h-12 text-gray-400 mb-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                            </svg>
                            <p className="text-lg font-medium">
                              No contacts found
                            </p>
                            <p className="text-sm">
                              Get started by adding your first contact.
                            </p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      contacts.map((contact) => (
                        <tr
                          key={contact.id}
                          onClick={() => router.push(`/contacts/${contact.id}`)}
                          className="hover:bg-yellow-50 cursor-pointer border-b border-gray-100 transition-all duration-400"
                        >
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                  <span className="text-sm font-medium text-white">
                                    {contact.name.charAt(0).toUpperCase()}
                                  </span>
                                </div>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-semibold text-gray-900">
                                  {contact.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="text-sm text-gray-900 font-medium">
                              {contact.email}
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {contact.phone}
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                              {contact.iam}
                            </span>
                          </td>
                          <td className="px-8 py-5">
                            <div className="text-sm text-gray-900 max-w-xs">
                              {contact.description.length > 60
                                ? `${contact.description.substring(0, 60)}...`
                                : contact.description}
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <span
                              className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                                contact.is_mailed
                                  ? "bg-green-100 text-green-800"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {contact.is_mailed ? "Sent" : "Pending"}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Pagination - Fixed in bottom right */}
          {!loading && totalPages > 1 && (
            <div className="fixed bottom-6 right-6 bg-white shadow-lg rounded-lg border border-gray-200 p-4 z-10">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-700">
                    Page {currentPage} of {totalPages}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({totalCount} total)
                  </span>
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
