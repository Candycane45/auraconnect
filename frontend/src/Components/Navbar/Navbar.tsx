"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useAuth } from "@/context/AuthUserContext";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const { authUser, loading, signOut } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/logo.png" // Put your logo PNG in public/logo.png
          alt="AuraConnect Logo"
          width={40} // adjust size as needed
          height={40}
          className={styles.logoImage}
        />
        <span>AuraConnect</span>
      </div>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/events"> Events</Link>
        <Link href="/create-event">Create Event</Link>
        <Link href="/about-us">About</Link>
        <Link href="/contact-us">Contact Us</Link>
      </nav>

      <div className={styles.authButtons} ref={dropdownRef}>
        {loading ? (
          <button className={styles.btnSecondary} disabled>
            Loading...
          </button>
        ) : authUser ? (
          <>
            <button className={styles.btnSecondary} onClick={toggleDropdown}>
              {authUser.displayName || authUser.email?.split("@")[0]}
            </button>
            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <div className={styles.userName}>
                    {authUser.displayName || authUser.email?.split("@")[0]}
                  </div>
                  <div className={styles.userEmail}>{authUser.email}</div>
                </div>
                <div className={styles.dropdownItem}>
                  <Link href="/profile">👤 Profile</Link>
                </div>
                {/* <div className={styles.dropdownItem}>
                  <Link href="/settings">⚙️ Settings</Link>
                </div> */}
                <hr />
                <button className={styles.logoutBtn} onClick={signOut}>
                  🚪 Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <Link href="/signin">
              <button className={styles.btnSecondary}>Sign In</button>
            </Link>
            <Link href="/signup">
              <button className={styles.btnPrimary}>Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
