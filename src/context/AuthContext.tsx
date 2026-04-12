import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAdmin: boolean;
  login: (email: string, code: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    // Check if we already logged in previously
    const authStatus = localStorage.getItem('lux_auth_admin');
    if (authStatus === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const login = (email: string, code: string) => {
    // Upgraded Secure Mock Verification
    if (email.toLowerCase() === 'admin@luxleather.com' && code === 'LuxAdmin#2026') {
      setIsAdmin(true);
      localStorage.setItem('lux_auth_admin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('lux_auth_admin');
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
