import styles from './StatsSection.module.css';

export default function StatsSection() {
  return (
    <section className={`${styles.stats} fade-in delay-1`}>
      <div className={styles.stat}>
        <h2>20,000+</h2>
        <p>Community Members</p>
      </div>
      <div className={styles.stat}>
        <h2>120+</h2>
        <p>Events Monthly</p>
      </div>
      <div className={styles.stat}>
        <h2>50+</h2>
        <p>Cities Covered</p>
      </div>
    </section>
  );
}
