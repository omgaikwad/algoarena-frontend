import React from "react";
import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import SingleProblemRow from "../../components/SingleProblemRow/SingleProblemRow";

const Home = () => {
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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((problem, index) => {
            return <SingleProblemRow key={index} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
