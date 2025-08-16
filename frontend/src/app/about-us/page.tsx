import Navbar from "@/Components/Navbar/Navbar";
import styles from "./about-us.module.css";
import type { NextPage } from "next";

const AboutUs: NextPage = () => {
  return (
    <>
      <Navbar />

      <main className={styles.aboutMain}>
        <section className={styles.aboutHero}>
          <h1>About AuraConnect</h1>
          <p className={styles.aboutMission}>
            <strong>Bringing Communities Closer.</strong> AuraConnect is more
            than an app—it&apos;s our dream to turn digital neighbourhoods into
            real, thriving communities.
            <br />
            We believe that the most meaningful connections are often found next
            door. In a world full of digital noise and endless feeds, we set out
            to make it easier for people to discover local activities, meet
            neighbours, and share unique experiences right where they live.
          </p>
        </section>

        <section className={styles.whySection}>
          <h2>Why We Built AuraConnect</h2>
          <p>
            People are busier and more plugged in than ever before, but that
            doesn&apos;t mean they have to be strangers to those around them.
            Global social platforms connect us to the world, yet often leave us
            feeling isolated within our own localities. AuraConnect fills this
            gap by making community meetups accessible, safe, and fun. From
            coffee meetups to park yoga and festival potlucks, our platform is
            designed for spontaneous plans and lasting relationships.
          </p>
        </section>

        <section className={styles.teamSection}>
          <h2>Meet the Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={`${styles.avatar} ${styles.avatarAI}`}></div>
              <h3>Anushka</h3>
              <p>
                Passionate about <strong>Machine Learning & AI</strong> with
                strong roots in Python. Experienced in cloud technologies (GCP,
                AWS), both relational and NoSQL databases, and mobile app dev
                using Flutter. Always excited to turn data into smart, impactful
                solutions.
              </p>
            </div>
            <div className={styles.teamMember}>
              <div className={`${styles.avatar} ${styles.avatarFE}`}></div>
              <h3>Pravallika</h3>
              <p>
                The creative heart of our <strong>frontend</strong>, dedicated
                to building beautiful and intuitive user experiences. A prompt
                engineering enthusiast and committed to unlocking the magic of
                Human-AI collaboration.
              </p>
            </div>
            <div className={styles.teamMember}>
              <div className={`${styles.avatar} ${styles.avatarWeb}`}></div>
              <h3>Roshan</h3>
              <p>
                Full-stack <strong>web developer</strong> with a passion for
                efficient, scalable applications. Loves experimenting with new
                technologies (including Rust and C!) and believes the web is for
                everyone.
              </p>
            </div>
            <div className={styles.teamMember}>
              <div className={`${styles.avatar} ${styles.avatarCloud}`}></div>
              <h3>Cindy</h3>
              <p>
                Third-year Computer Science student and passionate web
                developer. Eager to learn, collaborate, and help build digital
                spaces that bring people together.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.techSection}>
          <h2>Our Stack</h2>
          <ul>
            <li>
              <strong>Frontend:</strong> Next.js
            </li>
            <li>
              <strong>Backend:</strong> Express.js APIs
            </li>
            <li>
              <strong>Database:</strong> MongoDB
            </li>
            <li>
              <strong>Location:</strong> Google Maps API
            </li>
            <li>
              <strong>Auth:</strong> Firebase Authentication
            </li>
            <li>
              <strong>AI Recommendations:</strong> Python Microservice
            </li>
          </ul>
        </section>

        <section className={styles.impactSection}>
          <h2>Our Impact</h2>
          <p>
            We are driven by the belief that small, local interactions can have
            profound effects. By making meetups simple and secure, AuraConnect
            aims to reduce social isolation, encourage collaboration, celebrate
            culture, and help neighbours become friends.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        © 2025 AuraConnect. All Rights Reserved.
      </footer>
    </>
  );
};

export default AboutUs;
