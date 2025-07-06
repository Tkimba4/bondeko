import React from "react";
import styles from "./DashboardStatistique.module.scss";
import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr";
const DashboardStatistique = ({ elements, stat }) => {
  const { title, icon } = elements;

  return (
    <div className={styles.statistique}>
      <span>{icon}</span>
      <div className={styles.head}>
        <h4 className={styles.title}>{title}</h4>
      </div>
      <p className={styles.val}>{stat.length}</p>
      {/* <div className={styles.footer}>
        <span className={styles.description}>{description}</span>
        <button className={styles.btnList}>
          <CaretRightIcon height={30} width={30} />
        </button>
      </div> */}
    </div>
  );
};

export default DashboardStatistique;
