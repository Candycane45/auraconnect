"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Result.module.css";
import Navbar from "@/Components/Navbar/Navbar";
import { useEvents } from "@/hooks/useEvents";
import { API_URL } from "@/lib/constant";
import { useSearchParams } from "next/navigation";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("s") || "";
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const { data: events = [], isLoading, isError } = useEvents(searchTerm);

  return (
    <div>
      <Navbar />

      <main className={styles.searchResultsMain}>
        <div className={styles.searchSummary}>
          <form
            className={styles.searchBarForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Search events..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className={styles.btnSearch}>
              Search
            </button>
          </form>
          <div className={styles.resultsInfo}>
            {isLoading
              ? "Loading events..."
              : isError
              ? "Error fetching events"
              : `Found ${events.length} event${
                  events.length !== 1 ? "s" : ""
                } for `}
            <span className={styles.searchKeyword}>{searchTerm || "all"}</span>
          </div>
        </div>

        <div className={styles.searchEventsList}>
          {isLoading && <p>Loading...</p>}
          {isError && <p>Something went wrong!</p>}
          {!isLoading &&
            !isError &&
            events.map((event) => (
              <div key={event._id} className={styles.eventCard}>
                <div className={styles.eventImageWrapper}>
                  <Image
                    src={`${API_URL}\\${event.eventImage}`} // replace backslashes
                    alt={event.eventName}
                    width={330}
                    height={180}
                    className={styles.eventImg}
                  />
                </div>

                <div className={styles.eventContent}>
                  <h2 className={styles.eventTitle}>{event.eventName}</h2>

                  <div className={styles.eventMeta}>
                    <span className={styles.eventDate}>
                      {new Date(event.eventDate).toLocaleDateString()}{" "}
                      {new Date(event.eventDate).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    <span className={styles.eventLocation}>
                      • {event.eventLocation}
                    </span>
                  </div>

                  <p className={styles.eventDesc}>{event.eventDescription}</p>

                  <a href="#" className={styles.detailsLink}>
                    View Details
                  </a>
                </div>
              </div>
            ))}
        </div>
      </main>

      <footer className={styles.footer}>
        &copy; 2025 Eventify. All rights reserved.
      </footer>
    </div>
  );
}
