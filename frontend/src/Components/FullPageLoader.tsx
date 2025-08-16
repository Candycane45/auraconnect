// components/FullPageLoader.tsx
import React from "react";
import styles from "./FullPageLoader.module.css";

const FullPageLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>Loading...</div>
    </div>
  );
};

export default FullPageLoader;
