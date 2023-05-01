import React from "react";
import styles from "./Login.module.css";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
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
              type="password"
              placeholder="Password"
            />

            <button className={styles["signup_btn"]} type="submit">
              Login
            </button>
          </form>

          <div className={styles["redirect_btn_container"]}>
            <a href="/" className={styles["redirect_btn"]}>
              <span>Create New Account</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
