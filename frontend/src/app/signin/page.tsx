"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthUserContext";
import styles from "./SignIn.module.css"; // your CSS module

export default function SignInPage() {
  const router = useRouter();
  const { authUser, loading, signInWithEmailAndPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // ✅ Redirect if already logged in
  useEffect(() => {
    if (!loading && authUser) {
      router.replace("/"); // push or replace based on your preference
    }
  }, [authUser, loading, router]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      await signInWithEmailAndPassword(email, password);
      router.push("/");
    } catch (error: any) {
      setErrorMsg(error.message || "Login failed");
    }
  };

  if (loading) {
    return <div className={styles.pageWrapper}>Loading...</div>; // optional loading UI
  }

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.loginContainer}>
        <h1 className={styles.pageTitle}>Welcome Back!</h1>
        <form
          className={styles.loginForm}
          onSubmit={handleLogin}
          autoComplete="off"
        >
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {errorMsg && (
            <p style={{ color: "red", marginTop: "6px" }}>{errorMsg}</p>
          )}

          <button type="submit" className={styles.btnPrimary}>
            Login
          </button>
        </form>
        <p className={styles.signupText}>
          Don&apos;t have an account? <a href="/signup">Sign Up</a>
        </p>
      </main>
    </div>
  );
}
