import styles from "../styles/Layout.module.scss";

import React from "react";
import Head from "next/head";

const Layout: React.FC = ({ children }) => {
  // Header
  // <header className={styles.header}>
  //   <h1>ASKOP</h1>
  //   <nav>
  //     <NavLink href="/" className={styles["nav-button"]}>
  //       <span>O nas</span>
  //     </NavLink>
  //     <NavLink href="/offer" className={styles["nav-button"]}>
  //       <span>Oferta</span>
  //     </NavLink>
  //     <NavLink href="/contact" className={styles["nav-button"]}>
  //       <span>Kontakt</span>
  //     </NavLink>
  //   </nav>
  // </header>

  return (
    <main className={styles.main}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Roboto&Merriweather:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles["bg-image"]}></div>
      <div className={styles["page-container"]}>{children}</div>
    </main>
  );
};

export default Layout;
