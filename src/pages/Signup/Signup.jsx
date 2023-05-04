import React, { useState } from "react";
import styles from "./Signup.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { MAIN_REST_API, PORT } from "../../server";
import { useAuthContext } from "../../context/auth-context";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    showError: true,
    errorMessage: "Signup to access the problems",
  });

  const navigate = useNavigate();

  const { auth, setAuth } = useAuthContext();

  const signupHandler = async (e) => {
    e.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      setError({
        showError: true,
        errorMessage: "Passwords do not match",
      });

      return;
    }

    try {
      const response = await axios.post(`${MAIN_REST_API}:${PORT}/signup`, {
        username: signupData.username,
        email: signupData.email,
        password: signupData.password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      setAuth({
        isLoggedin: true,
        token: response.data.token,
        user: response.data.user,
      });

      setSignupData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      document.location.href = "/";
    } catch (error) {
      console.log(error);
      setError({
        showError: true,
        errorMessage: error.response.data.message,
      });
      setSignupData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
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
            onSubmit={(e) => signupHandler(e)}
            className={styles["signup_form"]}
          >
            <input
              onChange={(e) =>
                setSignupData({ ...signupData, username: e.target.value })
              }
              value={signupData.username}
              className={styles["signup_input"]}
              type="text"
              placeholder="Username"
              required={true}
            />
            <input
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
              value={signupData.email}
              className={styles["signup_input"]}
              type="email"
              placeholder="Email"
              required={true}
            />
            <input
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
              value={signupData.password}
              className={styles["signup_input"]}
              type="password"
              placeholder="Password"
              required={true}
            />
            <input
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  confirmPassword: e.target.value,
                })
              }
              value={signupData.confirmPassword}
              className={styles["signup_input"]}
              type="password"
              placeholder="Confirm Password"
              required={true}
            />
            {error.showError && (
              <p className={styles["error_text"]}>{error.errorMessage}</p>
            )}
            <button className={styles["signup_btn"]} type="submit">
              Sign Up
            </button>
          </form>

          <div className={styles["redirect_btn_container"]}>
            <Link to="/login" className={styles["redirect_btn"]}>
              <span>Already have an account</span>
              <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
