import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={`${styles.testimonials} fade-in delay-4`}>
      <h2>What Our Users Say</h2>
      <div className={styles.testimonialCards}>
        <div className={styles.testimonial}>
          <p>"AuraConnect helped me find amazing local events and new friends!"</p>
          <span>- Priya S.</span>
        </div>
        <div className={styles.testimonial}>
          <p>"The trending events list is spot on every week."</p>
          <span>- Arjun B.</span>
        </div>
        <div className={styles.testimonial}>
          <p>"So easy to organize and manage my own community yoga sessions."</p>
          <span>- Meera D.</span>
        </div>
      </div>
    </section>
  );
}
