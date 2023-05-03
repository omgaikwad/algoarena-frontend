import React from "react";
import styles from "./SingleProblemRow.module.css";
import { Link } from "react-router-dom";

const SingleProblemRow = ({ index, problem }) => {
  return (
    <div
      className={styles["problems_table_row"]}
      style={{
        backgroundColor: index % 2 === 0 ? "#2A2A2A" : "transparent",
      }}
    >
      <div className={styles["problems_table_row_cell"]}>{index + 1}.</div>
      <Link
        to={`/problem/${problem._id}`}
        className={styles["problems_table_row_cell_title"]}
      >
        {problem.title}
      </Link>
      <div
        className={`${styles["problems_table_row_cell"]} ${
          styles[`${problem.difficulty}_problem`]
        }`}
      >
        {problem.difficulty}
      </div>
      <div className={styles["problems_table_row_cell"]}>45.6%</div>
    </div>
  );
};

export default SingleProblemRow;
