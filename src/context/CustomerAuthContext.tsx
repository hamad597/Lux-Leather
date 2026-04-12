import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CustomerUser {
  id: string;
  name: string;
  email: string;
  password?: string; // Storing raw for mock simplicity
  joinDate: string;
}

interface CustomerAuthContextType {
  currentUser: CustomerUser | null;
  allUsers: CustomerUser[];
  login: (email: string, pass: string) => boolean;
  register: (name: string, email: string, pass: string) => boolean;
  logout: () => void;
}

const CustomerAuthContext = createContext<CustomerAuthContextType | undefined>(undefined);

export function CustomerAuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<CustomerUser | null>(null);
  const [allUsers, setAllUsers] = useState<CustomerUser[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedUsers = localStorage.getItem('lux_customers');
    const savedActiveUser = localStorage.getItem('lux_active_customer');

    if (savedUsers) setAllUsers(JSON.parse(savedUsers));
    if (savedActiveUser) setCurrentUser(JSON.parse(savedActiveUser));
    
    setIsLoaded(true);
  }, []);

  const saveUsers = (users: CustomerUser[]) => {
    setAllUsers(users);
    localStorage.setItem('lux_customers', JSON.stringify(users));
  };

  const login = (email: string, pass: string) => {
    const user = allUsers.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === pass);
    if (user) {
      // Remove password from memory layer (optional, keeping it simple for mock)
      setCurrentUser(user);
      localStorage.setItem('lux_active_customer', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const register = (name: string, email: string, pass: string) => {
    // Check duplicate
    if (allUsers.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return false; // Email taken
    }

    const newUser: CustomerUser = {
      id: 'usr_' + Math.random().toString(36).substr(2, 9),
      name,
      email,
      password: pass,
      joinDate: new Date().toISOString()
    };

    saveUsers([...allUsers, newUser]);
    
    // Auto login
    setCurrentUser(newUser);
    localStorage.setItem('lux_active_customer', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('lux_active_customer');
  };

  if (!isLoaded) return null;

  return (
    <CustomerAuthContext.Provider value={{ currentUser, allUsers, login, register, logout }}>
      {children}
    </CustomerAuthContext.Provider>
  );
}

export function useCustomerAuth() {
  const context = useContext(CustomerAuthContext);
  if (context === undefined) {
    throw new Error('useCustomerAuth must be used within a CustomerAuthProvider');
  }
  return context;
}
