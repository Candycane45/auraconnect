import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={`${styles.hero} fade-in`}>
      <h1>Discover & Join Local Events</h1>
      <p>
        Your community is just one click away. Search, join, and connect
        effortlessly.
      </p>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Search for events..." />
        <button className={styles.btnPrimary}>Search</button>
      </div>
    </section>
  );
}
