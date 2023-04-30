import React from "react";
import styles from "./Signup.module.css";
import Navbar from "../../components/Navbar/Navbar";

const Signup = () => {
  return (
    <div className={styles["signup"]}>
      <Navbar />

      <div className={styles["signup_container"]}>
        <div className={styles["signup_container__form"]}>
          <div className={styles["logo_container"]}>
            <img className={styles["logo"]} src="/assets/logo.png" alt="logo" />
            <p className={styles["logo_text"]}>algo arena</p>
          </div>
          <form className={styles["signup_form"]}>
            <input
              className={styles["signup_input"]}
              type="text"
              placeholder="Username"
            />
            <input
              className={styles["signup_input"]}
              type="email"
              placeholder="Email"
            />
            <input
              className={styles["signup_input"]}
              type="password"
              placeholder="Password"
            />
            <input
              className={styles["signup_input"]}
              type="password"
              placeholder="Confirm Password"
            />
            <button className={styles["signup_btn"]} type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
