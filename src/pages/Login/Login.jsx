import React, { useState } from "react";
import styles from "./Login.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { MAIN_REST_API, PORT } from "../../server";
import { useAuthContext } from "../../context/auth-context";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    showError: true,
    errorMessage: "Login to access the problems",
  });

  const { auth, setAuth } = useAuthContext();

  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${MAIN_REST_API}:${PORT}/login`, {
        username: loginData.username,
        password: loginData.password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      setAuth({
        isLoggedin: true,
        token: response.data.token,
        user: response.data.user,
      });

      setLoginData({
        username: "",
        password: "",
      });

      document.location.href = "/";
    } catch (error) {
      console.log(error.response.data.message);
      setError({
        showError: true,
        errorMessage: error.response.data.message,
      });
      setLoginData({
        username: "",
        password: "",
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
            onSubmit={(e) => loginHandler(e)}
            className={styles["signup_form"]}
          >
            <input
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
              value={loginData.username}
              className={styles["signup_input"]}
              type="text"
              placeholder="Username"
            />

            <input
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              value={loginData.password}
              className={styles["signup_input"]}
              type="password"
              placeholder="Password"
            />

            {error.showError && (
              <p className={styles["error_text"]}>{error.errorMessage}</p>
            )}

            <button className={styles["signup_btn"]} type="submit">
              Login
            </button>
          </form>

          <div className={styles["redirect_btn_container"]}>
            <Link to="/signup" className={styles["redirect_btn"]}>
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
