"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthUserContext";
import styles from "./SignUp.module.css";

export default function SignUpPage() {
  const router = useRouter();
  const { authUser, loading, createUserWithEmailAndPassword } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // ✅ Redirect if already logged in
  useEffect(() => {
    if (!loading && authUser) {
      router.replace("/");
    }
  }, [authUser, loading, router]);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(email, password, name);
      router.push("/");
    } catch (error: any) {
      setErrorMsg(error.message || "Signup failed");
    }
  };

  if (loading) {
    return <div className={styles.signupContainer}>Loading...</div>;
  }

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.signupContainer}>
        <h1 className={styles.pageTitle}>Create Your Account</h1>
        <form
          className={styles.signupForm}
          onSubmit={handleSignup}
          autoComplete="off"
        >
          <label htmlFor="fullname">Full Name *</label>
          <input
            type="text"
            id="fullname"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            placeholder="Choose a secure password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirm-password">Confirm Password *</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

          <button type="submit" className={styles.btnPrimary}>
            Sign Up
          </button>
        </form>

        <p className={styles.loginText}>
          Already have an account? <a href="/signin">Log In</a>
        </p>
      </main>
    </div>
  );
}
