import { LoginCredentials, AuthError } from "@/types";
import { supabase } from "./supabase";

export class AuthService {
  // Sign in with email and password
  static async signIn(
    credentials: LoginCredentials
  ): Promise<{ error: AuthError | null }> {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password
      });

      if (error) {
        return { error: { message: error.message, status: error.status } };
      }

      return { error: null };
    } catch (err) {
      return {
        error: {
          message:
            err instanceof Error ? err.message : "An unexpected error occurred",
          status: 500
        }
      };
    }
  }

  // Sign out
  static async signOut(): Promise<{ error: AuthError | null }> {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        return { error: { message: error.message, status: error.status } };
      }

      return { error: null };
    } catch (err) {
      return {
        error: {
          message:
            err instanceof Error ? err.message : "An unexpected error occurred",
          status: 500
        }
      };
    }
  }

  // Get current user
  static async getCurrentUser() {
    try {
      const {
        data: { user },
        error
      } = await supabase.auth.getUser();

      if (error) {
        throw error;
      }

      return user;
    } catch (err) {
      console.log("Error getting current user:", err);
      return null;
    }
  }

  // Get current session
  static async getSession() {
    try {
      const {
        data: { session },
        error
      } = await supabase.auth.getSession();

      if (error) {
        throw error;
      }

      return session;
    } catch (err) {
      console.error("Error getting session:", err);
      return null;
    }
  }
}
