"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { AuthService } from "@/lib/auth";
import { AuthContextType, AuthState, LoginCredentials, User } from "@/types";
import { toast } from "sonner";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    initialized: false
  });

  useEffect(() => {
    const SIGN_IN_TOAST_SHOWN_KEY = "signInToastShown";
    // Get initial session
    const getInitialSession = async () => {
      try {
        const session = await AuthService.getSession();
        setAuthState({
          user: (session?.user as User) || null,
          loading: false,
          initialized: true
        });
      } catch (error) {
        console.error("Error getting initial session:", error);
        setAuthState({
          user: null,
          loading: false,
          initialized: true
        });
      }
    };

    getInitialSession();

    // Listen for auth changes
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state change:", event, session?.user?.email);

      setAuthState({
        user: (session?.user as User) || null,
        loading: false,
        initialized: true
      });

      // Show toast notifications for auth events
      switch (event) {
        case "SIGNED_IN":
          const toastAlreadyShown =
            localStorage.getItem(SIGN_IN_TOAST_SHOWN_KEY) === "true";
          if (!toastAlreadyShown) {
            toast.success("Successfully signed in!");
            localStorage.setItem(SIGN_IN_TOAST_SHOWN_KEY, "true");
          }
          break;
        case "SIGNED_OUT":
          toast.success("Successfully signed out!");
          localStorage.removeItem(SIGN_IN_TOAST_SHOWN_KEY);
          break;
        case "TOKEN_REFRESHED":
          console.log("Token refreshed");
          break;
        case "USER_UPDATED":
          console.log("User updated");
          break;
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (credentials: LoginCredentials) => {
    setAuthState((prev) => ({ ...prev, loading: true }));

    try {
      const result = await AuthService.signIn(credentials);

      if (result.error) {
        toast.error(result.error.message);
        setAuthState((prev) => ({ ...prev, loading: false }));
      }

      return result;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Sign in failed";
      toast.error(errorMessage);
      setAuthState((prev) => ({ ...prev, loading: false }));
      return { error: { message: errorMessage } };
    }
  };

  const signOut = async () => {
    setAuthState((prev) => ({ ...prev, loading: true }));

    try {
      await AuthService.signOut();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Sign out failed";
      toast.error(errorMessage);
      console.error("Sign out error:", error);
    } finally {
      setAuthState((prev) => ({ ...prev, loading: false }));
    }
  };

  const value: AuthContextType = {
    user: authState.user,
    loading: authState.loading,
    initialized: authState.initialized,
    signIn,
    signOut
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
