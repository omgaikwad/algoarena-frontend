import React from "react";
import styles from "./Login.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { MAIN_REST_API, PORT } from "../../server";

const Login = () => {
  const loginHandler = async (e) => {
    e.preventDefault();
    console.log("login handler clicked");
    try {
      const response = await axios.post(`${MAIN_REST_API}:${PORT}/login`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles["signup"]}>
      <Navbar />

      <div className={styles["signup_container"]}>
        <div className={styles["signup_container__form"]}>
          <div className={styles["logo_container"]}>
            <img className={styles["logo"]} src="/assets/logo.png" alt="logo" />
            <p className={styles["logo_text"]}>algo arena</p>
          </div>
          <form
            onSubmit={(e) => loginHandler(e)}
            className={styles["signup_form"]}
          >
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
            <Link href="/" className={styles["redirect_btn"]}>
              <span>Create New Account</span>
              <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
