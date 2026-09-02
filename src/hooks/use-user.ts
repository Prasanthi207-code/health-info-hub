import { useState, useCallback } from "react";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  joinedAt: string;
}

const STORAGE_KEY = "dhap-user";

function readUser(): UserProfile | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeUser(user: UserProfile) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function useUser() {
  const [user, setUser] = useState<UserProfile | null>(readUser);

  const register = useCallback((data: { name: string; email: string; phone: string; password: string }) => {
    const newUser: UserProfile = {
      id: `user-${Date.now()}`,
      name: data.name,
      email: data.email,
      phone: data.phone,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(data.name)}&backgroundColor=0c4a6e,155e75,0e7490,0891b2,0284c7`,
      joinedAt: new Date().toISOString(),
    };
    writeUser(newUser);
    setUser(newUser);
    return newUser;
  }, []);

  const login = useCallback((emailOrPhone: string, _password: string) => {
    // Check if user exists in localStorage (from previous registration)
    const existing = readUser();
    if (existing && (existing.email === emailOrPhone || existing.phone === emailOrPhone)) {
      setUser(existing);
      return existing;
    }
    // Auto-create account for demo
    const newUser: UserProfile = {
      id: `user-${Date.now()}`,
      name: emailOrPhone.includes("@") ? emailOrPhone.split("@")[0] : `User`,
      email: emailOrPhone.includes("@") ? emailOrPhone : "",
      phone: emailOrPhone.includes("@") ? "" : emailOrPhone,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(emailOrPhone)}&backgroundColor=0c4a6e,155e75,0e7490,0891b2,0284c7`,
      joinedAt: new Date().toISOString(),
    };
    writeUser(newUser);
    setUser(newUser);
    return newUser;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  const isAuthenticated = user !== null;

  return { user, isAuthenticated, register, login, logout };
}
