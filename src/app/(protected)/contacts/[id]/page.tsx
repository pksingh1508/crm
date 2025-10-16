"use client";

import { ProtectedRoute } from "@/components/auth";
import { Contact } from "@/types";
import { supabase } from "@/lib/supabase";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { toast } from "sonner";

interface ContactDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ContactDetailPage({ params }: ContactDetailPageProps) {
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  // Unwrap the params Promise using React.use()
  const resolvedParams = use(params);

  // Email templates options
  const emailTemplates = [
    { value: 1, label: "Employer" },
    { value: 2, label: "Agent" },
    { value: 3, label: "Job Seeker" }
  ];

  // Send Email Handler function (empty for user to implement)
  const SendEmailHandler = async (
    template: number,
    contactEmail: string,
    contactName: string,
    contactId: any
  ) => {
    // Implement email sending logic here
    console.log(`Sending ${template} email to ${contactEmail}`);
    setIsSendingEmail(true);
    try {
      // Simulate API call
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: contactEmail,
          template_id: template,
          name: contactName,
          id: contactId
        })
      });
      const result = await response.json();
      if (response.status !== 200) {
        toast.error("Failed to send email");
        throw new Error(result.error || "Failed to send email");
      }

      // Close modal and show success message
      setIsModalOpen(false);
      setSelectedTemplate(0);

      // You can add a toast notification here
      toast.success("Email Sent Successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again.");
    } finally {
      setIsSendingEmail(false);
    }
  };

  const handleSendEmail = () => {
    if (!selectedTemplate) {
      alert("Please select an email template");
      return;
    }

    if (!contact) {
      alert("Contact data not available");
      return;
    }

    SendEmailHandler(selectedTemplate, contact.email, contact.name, contact.id);
  };

  useEffect(() => {
    const fetchContact = async () => {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from("contacts")
          .select("*")
          .eq("id", resolvedParams.id)
          .single();

        if (error) {
          console.error("Error fetching contact:", error);
          setError("Contact not found");
          return;
        }

        setContact(data);
      } catch (error) {
        console.error("Error fetching contact:", error);
        setError("Failed to load contact");
      } finally {
        setLoading(false);
      }
    };

    if (resolvedParams.id) {
      fetchContact();
    }
  }, [resolvedParams.id]);

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  if (error || !contact) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Contact Not Found
              </h2>
              <p className="text-gray-600 mb-6">
                {error || "The requested contact could not be found."}
              </p>
              <Link
                href="/contacts"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Contacts
              </Link>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  if (isModalOpen) {
    return (
      <div className="fixed inset-0 bg-gray-50 bg-opacity-10 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-xl">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-lg font-semibold">Send Email</h3>
              </div>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setSelectedTemplate(0);
                }}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
            <p className="text-blue-100 text-sm mt-2">
              Send an email to <strong>{contact?.email}</strong>
            </p>
          </div>

          {/* Modal Body */}
          <div className="p-6">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Email Template
              </label>
              <select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                required
              >
                <option value="">Choose a template...</option>
                {emailTemplates.map((template) => (
                  <option key={template.value} value={template.value}>
                    {template.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Preview Info */}
            {selectedTemplate && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-2">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-xs text-blue-700 mt-1">
                      This will send a personalized email using the selected
                      template.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setSelectedTemplate(0);
                }}
                className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                disabled={isSendingEmail}
              >
                Cancel
              </button>
              <button
                onClick={handleSendEmail}
                disabled={!selectedTemplate || isSendingEmail}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {isSendingEmail ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Send Email
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link
                  href="/contacts"
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back to Contacts
                </Link>
                <div className="h-6 w-px bg-gray-300"></div>
                <h1 className="text-2xl font-bold text-gray-700">
                  Contact Details
                </h1>
              </div>
              <span
                className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full border ${
                  contact.is_mailed
                    ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200"
                    : "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 border-gray-200"
                }`}
              >
                {contact.is_mailed ? "Mail Sent" : "Mail Pending"}
              </span>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Contact Header */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-8 text-white">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className="h-20 w-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-700">
                      {contact.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl text-gray-700 font-bold mb-2">
                    {contact.name}
                  </h2>
                  <p className="text-gray-500 text-lg">{contact.iam}</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">
                          Email
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {contact.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">
                          Phone
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {contact.phone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">
                          Category
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {contact.iam}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Description
                  </h3>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 leading-relaxed">
                      {contact.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Created:{" "}
                    {new Date(contact.created_at || "").toLocaleDateString()}
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Send Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
