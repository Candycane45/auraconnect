"use client";

import Navbar from "@/Components/Navbar/Navbar";
import styles from "./Profile.module.css";
import { useAuth } from "@/context/AuthUserContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import FullPageLoader from "@/Components/FullPageLoader";

export default function ProfilePage() {
  const { authUser, loading } = useAuth();
  const displayName = authUser?.displayName || "User"; // fallback if displayName is undefined

  // Redirect if user is not logged in
  const router = useRouter();
  useEffect(() => {
    if (!loading && !authUser) {
      router.push("/signin"); // redirect to sign-in page
    }
  }, [authUser, loading, router]);

  // While loading, optionally show nothing or a loader
  if (loading || !authUser) {
    return <FullPageLoader />;
  }

  return (
    <>
      <Navbar />
      <main className={styles.profileMain}>
        {/* Profile Header */}
        <section className={styles.profileHeader}>
          {/* <div className={styles.profileAvatar}>
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b766?auto=format&fit=crop&w=150&q=80"
              alt="User Avatar"
            />
          </div> */}
          <div className={styles.profileInfo}>
            <h1>{displayName}</h1>
            <p className={styles.profileLocation}>📍 Mumbai, India</p>
            <p className={styles.profileBio}>
              Love connecting with new people and exploring local events! Always
              up for coffee meetups and yoga sessions.
            </p>
            {/* <button className={styles.btnEdit}>Edit Profile</button> */}
          </div>
        </section>

        {/* Profile Stats */}
        <section className={styles.profileStats}>
          <div className={styles.statCard}>
            <h3>42</h3>
            <p>Events Attended</p>
          </div>
          <div className={styles.statCard}>
            <h3>8</h3>
            <p>Events Hosted</p>
          </div>
          <div className={styles.statCard}>
            <h3>4.8</h3>
            <p>Community Rating</p>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
          </div>
          <div className={styles.statCard}>
            <h3>126</h3>
            <p>Connections Made</p>
          </div>
        </section>

        {/* Recent Activity */}
        <section className={styles.recentActivity}>
          <h2>Recent Activity</h2>
          <div className={styles.activityList}>
            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>📅</div>
              <div className={styles.activityContent}>
                <p>
                  <strong>Attended</strong> K-pop Dance Night
                </p>
                <span className={styles.activityDate}>2 days ago</span>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>🎯</div>
              <div className={styles.activityContent}>
                <p>
                  <strong>Hosted</strong> Yoga in the Park
                </p>
                <span className={styles.activityDate}>1 week ago</span>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>⭐</div>
              <div className={styles.activityContent}>
                <p>
                  <strong>Received</strong> 5-star rating from Sarah
                </p>
                <span className={styles.activityDate}>1 week ago</span>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>🤝</div>
              <div className={styles.activityContent}>
                <p>
                  <strong>Connected</strong> with 3 new community members
                </p>
                <span className={styles.activityDate}>2 weeks ago</span>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className={styles.reviewsSection}>
          <h2>What Others Say</h2>
          <div className={styles.reviewsGrid}>
            <div className={styles.reviewCard}>
              <div className={styles.reviewStars}>⭐⭐⭐⭐⭐</div>
              <p>
                &quot;{displayName} is such great company! Really friendly and
                made everyone feel welcome at the coffee meetup.&quot;
              </p>
              <span className={styles.reviewer}>- Arjun K.</span>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.reviewStars}>⭐⭐⭐⭐⭐</div>
              <p>
                &quot;Amazing host! The yoga session was perfectly organized and
                {displayName} created such a positive atmosphere.&quot;
              </p>
              <span className={styles.reviewer}>- Meera D.</span>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        © 2025 AuraConnect. All Rights Reserved.
      </footer>
    </>
  );
}
