import Link from "next/link";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={`${styles.cta} fade-in delay-5`}>
      <h2>Ready to Host Your Own Event?</h2>
      <p>Bring your community together with just a few clicks.</p>
      <button className={styles.btnSecondary}>
        <Link href="/events">Create Event</Link>
      </button>
    </section>
  );
}
