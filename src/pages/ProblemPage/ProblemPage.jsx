import React from "react";
import styles from "./ProblemPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import { MAIN_REST_API, PORT } from "../../server";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProblemPage = () => {
  const [problem, setProblem] = useState({});
  const { id } = useParams();

  const getProblemData = async () => {
    try {
      const response = await axios.get(
        `${MAIN_REST_API}:${PORT}/problem/${id}`
      );
      console.log(response);
      setProblem(response.data);
    } catch (error) {
      console.log("error in getProblemData", error);
    }
  };

  useEffect(() => {
    getProblemData();
  }, []);

  return (
    <div className={styles["problem_page"]}>
      <Navbar />

      <div className={styles["problem_container"]}>
        <div className={styles["problem_description_container"]}>
          <div className={styles["title_container"]}>
            <h3 className={styles["problem_title"]}>{problem.title}</h3>
            <span
              className={`${styles["problem_difficulty"]} ${
                styles[`${problem.difficulty}_problem`]
              } `}
            >
              {problem.difficulty}
            </span>
          </div>

          <div className={styles["problem_description"]}>
            <p>{problem.description}</p>
          </div>

          <h4>Example 1:</h4>
          <div className={styles["problem_example"]}>
            <p>
              <strong>Input:</strong> nums = [2,7,11,15], target = 9
            </p>
            <p>
              <strong>Output:</strong> [0,1]
            </p>
            <p>
              <strong>Output:</strong> Because nums[0] + nums[1] == 9, we return
              [0, 1].
            </p>
          </div>

          {/* constraints */}
          <div className={styles["problem_constraints"]}>
            <h4>Constraints:</h4>
            <ul>
              <li>
                <p>
                  2 &lt;= nums.length &lt;= 10<sup>3</sup>
                </p>
              </li>
              <li>
                <p>
                  -10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup>
                </p>
              </li>
              <li>
                <p>
                  -10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup>
                </p>
              </li>
              <li>
                <p>Only one valid answer exists.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles["code_editor_container"]}>
          <div className={styles["code_editor"]}></div>
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
