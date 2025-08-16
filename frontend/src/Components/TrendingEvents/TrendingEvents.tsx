import styles from './TrendingEvents.module.css';

export default function TrendingEvents() {
  return (
    <section className={`${styles.trending} fade-in delay-2`}>
      <h2>Trending Events</h2>
      <div className={styles.eventCards}>
        <div className={styles.eventCard}><h3>K-pop Dance Night</h3><p>Fri, 8 PM | Modern Hall</p></div>
        <div className={styles.eventCard}><h3>Pet Adoption Fair</h3><p>Sat, 10 AM | Green Park</p></div>
        <div className={styles.eventCard}><h3>Coffee Meetup</h3><p>Sun, 4 PM | Urban Café</p></div>
      </div>
      <a href="#" className={styles.moreLink}>View All Trending</a>
    </section>
  );
}
