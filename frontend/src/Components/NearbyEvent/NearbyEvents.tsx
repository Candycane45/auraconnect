import styles from './NearbyEvents.module.css';

export default function NearbyEvents() {
  return (
    <section className={`${styles.nearby} fade-in delay-3`}>
      <h2>Events Near You</h2>
      <button className={styles.btnLocation}>Use My Location</button>
      <div className={styles.eventCards}>
        <div className={styles.eventCard}><h3>Yoga by the Lake</h3><p>Today, 6 AM | City Lake</p></div>
        <div className={styles.eventCard}><h3>Food Fest</h3><p>Sat, 5 PM | Downtown Street</p></div>
      </div>
    </section>
  );
}
