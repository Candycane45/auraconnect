import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>AuraConnect</div>
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#">Trending Events</a>
        <a href="#">Create Event</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
      </nav>
      <button className={styles.btnPrimary}>Sign In</button>
    </header>
  );
}
