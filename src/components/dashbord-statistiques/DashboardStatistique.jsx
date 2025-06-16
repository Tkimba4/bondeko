import React from "react";
import styles from "./DashboardStatistique.module.scss";
const DashboardStatistique = ({ elements, val = 1 }) => {
  const { title, icon, description } = elements;

  return (
    <div className={styles.statistique}>
      <div className={styles.head}>
        <h4 className={styles.title}>{title}</h4>
        {icon}
      </div>
      <p className={styles.val}>{val}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default DashboardStatistique;
