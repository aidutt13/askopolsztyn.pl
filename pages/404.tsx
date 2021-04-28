import styles from "../styles/Home.module.scss";

import React from "react";

export default (() => {
  return (
    <main className={styles["section-parent"]}>
      <section id="splash" className={`${styles.splash} ${styles.flex}`}>
        <h1>404</h1>
        <h2>Strona nie istnieje</h2>
      </section>
    </main>
  );
}) as React.FC;
