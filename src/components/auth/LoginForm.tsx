"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { LoginCredentials } from "@/types";
import { FormInput } from "../forms";
import Button from "../ui/button";
import { Card } from "../ui";
import { toast } from "sonner";

interface LoginFormProps {
  onSwitchToSignup?: () => void;
}

type LoginStep = "login" | "otp";

export const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToSignup }) => {
  const [currentStep, setCurrentStep] = useState<LoginStep>("login");
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: "",
    password: ""
  });
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState<Partial<LoginCredentials>>({});
  const [otpError, setOtpError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();
  const router = useRouter();

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginCredentials> = {};

    if (!credentials.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!credentials.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await signIn(credentials);

      if (!error) {
        // send OTP to Admin Email here
        const email = credentials.email;
        await fetch("/api/send-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email })
        });
        // Move to OTP verification step instead of direct redirect
        toast.success("OTP successfully sent to Admin Email");
        setCurrentStep("otp");
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOTPVerification = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!otp.trim()) {
      setOtpError("Please enter the OTP");
      return;
    }

    setIsLoading(true);
    setOtpError("");

    try {
      // Here you would typically verify the OTP with your backend
      // For now, we'll simulate OTP verification
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: credentials.email, otp })
      });
      const result = await response.json();
      if (result.success) {
        toast.success("OTP verified successfully!");
        router.push("/dashboard"); // Redirect to main dashboard after OTP verification
      } else {
        setOtpError("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      setOtpError("OTP verification failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof LoginCredentials, value: string) => {
    setCredentials((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (currentStep === "login") {
    return (
      <Card className="w-full max-w-md mx-auto" padding="lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Sign in to EU Career CRM</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            name="email"
            label="Email Address"
            type="email"
            value={credentials.email}
            onChange={(value) => handleInputChange("email", value)}
            error={errors.email}
            placeholder="Enter your email"
            required
            disabled={isLoading}
          />

          <FormInput
            name="password"
            label="Password"
            type="password"
            value={credentials.password}
            onChange={(value) => handleInputChange("password", value)}
            error={errors.password}
            placeholder="Enter your password"
            required
            disabled={isLoading}
          />

          <Button
            type="submit"
            className="w-full"
            size="lg"
            loading={isLoading}
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </form>
      </Card>
    );
  }

  // OTP Verification Step
  return (
    <Card className="w-full max-w-md mx-auto" padding="lg">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Verify OTP</h2>
        <p className="text-gray-600 mt-2">
          Enter the verification code sent to Admin Email
        </p>
      </div>

      <form onSubmit={handleOTPVerification} className="space-y-6">
        <FormInput
          name="otp"
          label="Verification Code"
          type="text"
          value={otp}
          onChange={setOtp}
          error={otpError}
          placeholder="Enter 6-digit OTP"
          required
          disabled={isLoading}
          maxLength={6}
        />

        <Button
          type="submit"
          className="w-full"
          size="lg"
          loading={isLoading}
          disabled={isLoading}
        >
          {isLoading ? "Verifying..." : "Verify & Sign In"}
        </Button>

        <Button
          type="button"
          variant="secondary"
          className="w-full"
          size="lg"
          onClick={() => {
            setCurrentStep("login");
            setOtp("");
            setOtpError("");
          }}
          disabled={isLoading}
        >
          Back to Login
        </Button>
      </form>
    </Card>
  );
};
