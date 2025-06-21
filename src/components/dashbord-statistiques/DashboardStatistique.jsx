import React from "react";
import styles from "./DashboardStatistique.module.scss";
import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr";
const DashboardStatistique = ({ elements, val = 1 }) => {
  const { title, icon, description } = elements;

  return (
    <div className={styles.statistique}>
      <div className={styles.head}>
        <h4 className={styles.title}>{title}</h4>
        {icon}
      </div>
      <p className={styles.val}>{val}</p>
      <div className={styles.footer}>
        <span className={styles.description}>{description}</span>
        <button className={styles.btnList}>
          <CaretRightIcon height={30} width={30}  />
        </button>
      </div>
    </div>
  );
};

export default DashboardStatistique;
