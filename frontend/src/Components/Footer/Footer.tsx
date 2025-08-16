import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} fade-in delay-6`}>
      {/* <div className={styles.footerContact}>
        <h2>Contact Us</h2>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={4} required />
          <button className={styles.btnPrimary} type="submit">Send</button>
        </form>
      </div> */}
      <div className={styles.footerCopyright}>
        <p>© 2025 AuraConnect. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
