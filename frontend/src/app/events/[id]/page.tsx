"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Navbar from "@/Components/Navbar/Navbar";
import styles from "./EventDetails.module.css"; // make sure your CSS matches classes
import { API_URL } from "@/lib/constant";
import { useState } from "react";

export interface Event {
  _id: string;
  eventName: string;
  eventDate: string;
  eventLocation: string;
  eventCategory: string;
  eventDescription: string;
  eventImage: string;
  eventPrice?: number;
  createdBy: string;
}

export const fetchEventById = async (id: string): Promise<Event> => {
  const res = await fetch(`${API_URL}/api/events/${id}`);
  if (!res.ok) throw new Error("Failed to fetch event");
  const data = await res.json();
  return data.event;
};

export default function EventPage() {
  const param = useParams();
  const id = param.id as string;

  const {
    data: event,
    isLoading,
    isError,
    error,
  } = useQuery<Event, Error>({
    queryKey: ["event", id],
    queryFn: () => fetchEventById(id!),
    enabled: !!id,
  });

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Copy current page URL
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopied(true);
        // Reset message after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  if (isLoading) return <div>Loading event...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (!event) return <div>Error: No event found</div>;

  return (
    <>
      <Navbar />

      <main className={`${styles.eventDetails} ${styles.fadeIn}`}>
        <div className={styles.eventCardLg}>
          <Image
            src={`http://localhost:5000/${event.eventImage}`} // adjust base URL
            alt={event.eventName}
            width={900}
            height={250}
            className={styles.eventBanner}
          />

          <div className={styles.eventInfo}>
            <h1 className={styles.eventTitle}>{event.eventName}</h1>
            <div className={styles.eventMeta}>
              <span className={styles.eventDate}>
                <b>Date:</b> {new Date(event.eventDate).toLocaleString()}
              </span>
              <span className={styles.eventLocation}>
                <b>Location:</b> {event.eventLocation}
              </span>
            </div>

            <div className={styles.eventTags}>
              {" "}
              <b>Category:</b> {event.eventCategory}
            </div>
            <p>
              <b>other:</b>
            </p>
            <p className={styles.eventDescription}>{event.eventDescription}</p>

            <div className={styles.eventDetailsList}>
              <div>
                <b>Hosted by:</b> {event.createdBy}
              </div>
              <div>
                <b>Entry Fee:</b> ₹{event.eventPrice || 0}
              </div>
              <div>
                <b>Capacity:</b> {"Unlimited"}
              </div>
            </div>

            <a className={styles.eventActionBtn} href="#">
              RSVP / Join Event
            </a>
          </div>
        </div>

        <aside className={styles.eventSidebar}>
          <div className={styles.eventTimebox}>
            <h3>Schedule</h3>
            <ul>
              <li>
                <b>{event.eventDate.toString()}</b>
              </li>
            </ul>
          </div>

          <div className={styles.eventAttendees}>
            {/* <h3>Who&apos;s Joining?</h3> */}
            <div className={styles.attendeeAvatars}>
              {/* {event.attendees?.slice(0, 3).map((att, idx) => (
                <img
                  key={idx}
                  src={att.avatar}
                  alt={att.name}
                  title={att.name}
                />
              ))}
              {event.attendees && event.attendees.length > 3 && (
                <span>+{event.attendees.length - 3} others</span>
              )} */}
            </div>
          </div>

          <div className={styles.eventShare}>
            <h3>Share</h3>

            <button onClick={handleCopy} className={styles.btnSecondary}>
              Copy Link
            </button>
            {copied && <div>Link copied successfully</div>}
            {/* <button className={styles.btnSecondary}>Share on WhatsApp</button> */}
          </div>
        </aside>
      </main>
    </>
  );
}
