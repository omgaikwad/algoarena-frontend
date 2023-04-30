import React from "react";
import styles from "./SingleProblemRow.module.css";

const SingleProblemRow = ({ index }) => {
  return (
    <div
      className={styles["problems_table_row"]}
      style={{
        backgroundColor: index % 2 === 0 ? "#2A2A2A" : "transparent",
      }}
    >
      <div className={styles["problems_table_row_cell"]}>{index + 1}.</div>
      <a href="/problem/1" className={styles["problems_table_row_cell_title"]}>
        Two Sum
      </a>
      <div
        className={`${styles["problems_table_row_cell"]} ${styles["easy_problem"]}`}
      >
        Easy
      </div>
      <div className={styles["problems_table_row_cell"]}>45.6%</div>
    </div>
  );
};

export default SingleProblemRow;
