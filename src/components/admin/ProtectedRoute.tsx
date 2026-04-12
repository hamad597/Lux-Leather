import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/src/context/AuthContext';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return <Navigate to="/admin/redirect?to=/admin/login" replace />;
  }

  return <>{children}</>;
}
