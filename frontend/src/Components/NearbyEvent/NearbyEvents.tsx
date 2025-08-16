import styles from "./Nearby.module.css";

export default function NearbyEvents() {
  const events = [
    {
      title: "Yoga by the Lake",
      datetime: "Today, 6 AM | City Lake",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.5BMZgi77Y-Vdrg8GzcmOTQHaE7%3Fr%3D0%26pid%3DApi&f=1&ipt=10d37a3125f382bb43ad2a3be223c2bedf257a91a97691a0fcec36c553b4f796&ipo=images",
    },
    {
      title: "Food Fest",
      datetime: "Sat, 5 PM | Downtown Street",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className={`${styles.nearby} fade-in delay-3`}>
      <h2>Events Near You</h2>
      {/* <button className={styles.btnLocation}>Use My Location</button> */}
      <div className={styles.eventCards}>
        {events.map((event, index) => (
          <div key={index} className={styles.eventCard}>
            <div className={styles.imageWrapper}>
              <img
                src={event.image}
                alt={event.title}
                className={styles.eventImage}
              />
            </div>
            <h3>{event.title}</h3>
            <p>{event.datetime}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
