"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import styles from "./ContactUs.module.css";
import { API_URL } from "@/lib/constant";

// Define types
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMutation = useMutation<ContactResponse, Error, ContactFormData>({
    mutationFn: async (data: ContactFormData) => {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to send message");
      }
      return res.json();
    },
    onSuccess: () => {
      setFormData({ name: "", email: "", phone: "", message: "" });
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <main className={styles.contactContainer}>
      <h1 className={styles.pageTitle}>Contact Us</h1>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number (optional)"
          value={formData.phone}
          onChange={handleChange}
        />

        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          className={styles.btnSubmit}
          disabled={contactMutation.isPending}
        >
          {contactMutation.isPending ? "Sending..." : "Send Message"}
        </button>

        {contactMutation.isSuccess && (
          <p style={{ marginTop: "15px", color: "green" }}>
            Message sent successfully!
          </p>
        )}
        {contactMutation.isError && (
          <p style={{ marginTop: "15px", color: "red" }}>
            {contactMutation.error.message}
          </p>
        )}
      </form>
    </main>
  );
}
