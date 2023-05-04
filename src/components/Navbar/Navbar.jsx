import React from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";

const Navbar = () => {
  const { auth, setAuth } = useAuthContext();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setAuth({
      isLoggedIn: false,
      token: "",
      user: {},
    });

    document.location.href = "/login";
  };

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
        {auth.isLoggedIn ? (
          <div className={styles["logout_container"]}>
            <p> Hi, {auth.user.username} </p>
            <button
              onClick={() => logoutHandler()}
              className={styles["logout_btn"]}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className={styles["navbar_login_btn"]}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
