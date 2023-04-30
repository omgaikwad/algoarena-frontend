import React from "react";
import styles from "./ProblemPage.module.css";
import Navbar from "../../components/Navbar/Navbar";

const ProblemPage = () => {
  return (
    <div className={styles["problem_page"]}>
      <Navbar />

      <div className={styles["problem_container"]}>
        <div className={styles["problem_description_container"]}>
          <div className={styles["title_container"]}>
            <h3 className={styles["problem_title"]}>1. Two Sum</h3>
            <span className={styles["problem_difficulty"]}>Easy</span>
          </div>

          <div className={styles["problem_description"]}>
            <p>
              Given an array of integers nums and an integer target, return
              indices of the two numbers such that they add up to target.
            </p>

            <p>
              You may assume that each input would have exactly one solution,
              and you may not use the same element twice.
            </p>

            <p>You can return the answer in any order.</p>
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
