import { LoginForm } from "@/components/auth";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
