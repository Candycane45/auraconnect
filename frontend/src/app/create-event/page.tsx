"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import styles from "./CreateEvent.module.css";
import Navbar from "@/Components/Navbar/Navbar";
import { useCreateEvent } from "@/hooks/useCreateEvent";
import { useAuth } from "@/context/AuthUserContext";
import { useRouter } from "next/navigation";
import FullPageLoader from "@/Components/FullPageLoader";

const CreateEvent = () => {
  const {
    mutate: createEvent,
    // isLoading,
    isPending,
    isSuccess,
    isError,
    error,
  } = useCreateEvent();

  const { authUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) {
      router.push("/signin"); // redirect if not logged in
    }
  }, [loading, authUser, router]);

  if (loading || !authUser) {
    return <FullPageLoader />; // show big loader
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const fileInput = formData.get("eventImage") as File;

    if (!authUser?.email) {
      alert("You must be logged in to create an event.");
      return;
    }

    const submissionForm = new FormData();
    submissionForm.append("eventName", formData.get("eventName") as string);
    submissionForm.append("eventDate", formData.get("eventDate") as string);
    submissionForm.append(
      "eventLocation",
      formData.get("eventLocation") as string
    );
    submissionForm.append(
      "eventCategory",
      formData.get("eventCategory") as string
    );
    submissionForm.append(
      "eventDescription",
      formData.get("eventDescription") as string
    );
    submissionForm.append("eventPrice", formData.get("eventPrice") as string);
    submissionForm.append("eventImage", fileInput); // 👈 Appending actual file
    submissionForm.append("createdBy", authUser.email);

    createEvent(submissionForm);
  };

  return (
    <>
      <Head>
        <title>Create Event | AuraConnect</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className={styles.createEventContainer}>
        <h1 className={styles.pageTitle}>Create Your Event</h1>
        {/* ✅ Wire up the handler here */}
        <form
          className={styles.eventForm}
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <label htmlFor="eventName">Event Name *</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            placeholder="Enter event name"
            required
          />

          <label htmlFor="eventDate">Date & Time *</label>
          <input
            type="datetime-local"
            id="eventDate"
            name="eventDate"
            required
          />

          <label htmlFor="eventLocation">Location *</label>
          <input
            type="text"
            id="eventLocation"
            name="eventLocation"
            placeholder="Event venue or address"
            required
          />

          <label htmlFor="eventCategory">Category *</label>
          <select
            id="eventCategory"
            name="eventCategory"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="Music">Music</option>
            <option value="Arts & Culture">Arts & Culture</option>
            <option value="Sports">Sports</option>
            <option value="Networking">Networking</option>
            <option value="Workshops">Workshops</option>
            <option value="Virtual">Virtual</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="eventDescription">Description *</label>
          <textarea
            id="eventDescription"
            name="eventDescription"
            rows={5}
            placeholder="Describe your event"
            required
          ></textarea>

          <label htmlFor="eventImage">Upload Event Image *</label>
          <input
            type="file"
            id="eventImage"
            name="eventImage"
            accept="image/*"
            required
          />

          <label htmlFor="eventPrice">Entry Fee (Optional)</label>
          <input
            type="number"
            id="eventPrice"
            name="eventPrice"
            placeholder="Enter price (e.g. 250)"
            min="0"
            step="0.01"
          />

          <button
            type="submit"
            className={styles.btnSubmit}
            disabled={isPending}
          >
            {isPending ? "Creating..." : "Create Event"}
          </button>

          {isSuccess && (
            <p className={styles.success}>✅ Event created successfully!</p>
          )}
          {isError && (
            <p className={styles.error}>
              ❌ Something went wrong:{" "}
              {error instanceof Error ? error.message : "Unknown error"}
            </p>
          )}
        </form>
      </main>
    </>
  );
};

export default CreateEvent;
