import Link from "next/link";
import styles from "./TrendingEvents.module.css";
import { url } from "inspector";

export default function TrendingEvents() {
  const events = [
    {
      key: 1,
      title: "K-pop Dance Night",
      datetime: "Fri, 8 PM | Modern Hall",
      url: "http://localhost:3000/events/68a09d81707165101471afb9",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthesmartlocal.com%2Fkorea%2Fwp-content%2Fuploads%2F2020%2F07%2FK-pop-dance-4-2048x982.jpg&f=1&nofb=1&ipt=3415e0e0620c30107ce2b5696357d383eaf51e3981d1f0c2a2607c1b8159dcb7",
    },
    {
      key: 2,
      title: "Pet Adoption Fair",
      datetime: "Sat, 10 AM | Green Park",
      url: "http://localhost:3000/events/68a0a0e9707165101471afc5",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.9eYzQQmWzFdLtmwh56th2wHaE8%3Fr%3D0%26pid%3DApi&f=1&ipt=142be55be465c4e8e97360afa9e02263f280fa67fd135b220b7b9bd1b177fd2e&ipo=images",
    },
    {
      key: 3,
      title: "Coffee Meetup",
      datetime: "Sun, 4 PM | Urban Café",
      url: "http://localhost:3000/events/68a0a152707165101471afc7",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className={`${styles.trending} fade-in delay-2`}>
      <h2>Trending Events</h2>
      <div className={styles.eventCards}>
        {events.map((event, index) => (
          <Link key={index} href={event.url}>
            <div className={styles.eventCard}>
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
          </Link>
        ))}
      </div>
      <Link href="/events" className={styles.moreLink}>
        View All Trending
      </Link>
    </section>
  );
}
