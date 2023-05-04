import React from "react";
import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import SingleProblemRow from "../../components/SingleProblemRow/SingleProblemRow";
import { useState } from "react";
import axios from "axios";
import { MAIN_REST_API, PORT } from "../../server";
import { useEffect } from "react";
import { useAuthContext } from "../../context/auth-context";

const Home = () => {
  const [problems, setProblems] = useState([]);

  const { auth } = useAuthContext();
  console.log(auth);

  const getAllProblems = async () => {
    try {
      const response = await axios.get(`${MAIN_REST_API}:${PORT}/problems`);
      setProblems(response.data);
    } catch (error) {
      console.log("error in getAllProblems", error);
    }
  };

  useEffect(() => {
    getAllProblems();
  }, []);

  return (
    <div className={styles["home"]}>
      <Navbar />

      <div className={styles["problems_wrapper"]}>
        <div className={styles["problems_table"]}>
          <div className={styles["problems_table_header"]}>
            <div className={styles["problems_table_header_cell"]}>#</div>
            <div className={styles["problems_table_header_cell"]}>Title</div>
            <div className={styles["problems_table_header_cell"]}>
              Difficulty
            </div>

            <div className={styles["problems_table_header_cell"]}>Accuracy</div>
          </div>
          {problems.map((problem, index) => {
            return (
              <SingleProblemRow key={index} index={index} problem={problem} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
