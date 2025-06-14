import React from "react";
import styles from "./Statistique.module.scss";
const Statistique = ({ data }) => {
  const { label, desc } = data;
  return (
    <div className={styles.statistique}>
      <h4 className={styles.label}>{label}</h4>
      <p className={styles.description}>{desc}</p>
    </div>
  );
};

export default Statistique;
