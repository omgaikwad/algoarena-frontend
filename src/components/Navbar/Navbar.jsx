import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["navbar_left_container"]}>
        <div className={styles["navbar_logo_container"]}>
          <img className={styles["logo"]} src="/assets/logo.png" alt="logo" />
        </div>

        <div className={styles["navbar_links_container"]}>
          <a href="/" className={styles["navbar_link"]}>
            Problems
          </a>
        </div>
      </div>
      <div className={styles["navbar_right_container"]}>
        <button className={styles["navbar_login_btn"]}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
