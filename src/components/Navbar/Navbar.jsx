import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["navbar_left_container"]}>
        <div className={styles["navbar_logo_container"]}>
          <img className={styles["logo"]} src="/assets/logo.png" alt="logo" />
        </div>

        <div className={styles["navbar_links_container"]}>
          <Link to="/" className={styles["navbar_link"]}>
            Problems
          </Link>
        </div>
      </div>
      <div className={styles["navbar_right_container"]}>
        <Link to="/login" className={styles["navbar_login_btn"]}>
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
