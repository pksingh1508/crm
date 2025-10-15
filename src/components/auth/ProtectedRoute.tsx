'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  fallback = <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
}) => {
  const { user, loading, initialized } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect immediately if auth is initialized and user is not authenticated
    if (initialized && !user && !loading) {
      router.replace('/auth');
    }
  }, [user, loading, initialized, router]);

  // If auth is not initialized yet, show loading
  if (!initialized) {
    return <>{fallback}</>;
  }

  // If loading auth state, show loading
  if (loading) {
    return <>{fallback}</>;
  }

  // If user is not authenticated, show loading (while redirecting)
  if (!user) {
    return <>{fallback}</>;
  }

  // User is authenticated, render the protected content
  return <>{children}</>;
};
