"use client";

import React, { createContext, useContext, ReactNode } from "react";
import useFirebaseAuth from "../lib/useFirebaseAuth";

// Auth user shape matching your hook
interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
}

// Define the exact type returned by useFirebaseAuth
interface AuthContextType {
  authUser: AuthUser | null;
  loading: boolean;
  signInWithEmailAndPassword: (email: string, password: string) => Promise<any>;
  createUserWithEmailAndPassword: (
    email: string,
    password: string,
    name: string
  ) => Promise<any>;
  signOut: () => Promise<void>;
}

const authUserContext = createContext<AuthContextType>({
  authUser: null,
  loading: true,
  signInWithEmailAndPassword: async () => {
    throw new Error("signInWithEmailAndPassword not implemented");
  },
  createUserWithEmailAndPassword: async () => {
    throw new Error("createUserWithEmailAndPassword not implemented");
  },
  signOut: async () => {
    throw new Error("signOut not implemented");
  },
});

interface AuthUserProviderProps {
  children: ReactNode;
}

export function AuthUserProvider({ children }: AuthUserProviderProps) {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

// Custom hook to use the AuthUser context
export const useAuth = (): AuthContextType => useContext(authUserContext);
