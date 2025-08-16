"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return; // prevent empty search
    router.push(`/events?s=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <section className={`${styles.hero} fade-in`}>
      <h1>Discover & Join Local Events</h1>
      <p>
        Your community is just one click away. Search, join, and connect
        effortlessly.
      </p>

      <form className={styles.searchBox} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className={styles.btnPrimary}>
          Search
        </button>
      </form>
    </section>
  );
}
