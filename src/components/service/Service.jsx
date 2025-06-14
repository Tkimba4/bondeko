import React from "react";
import styles from "./Service.module.scss";
const Service = ({ service }) => {
  const { name, desc, icon } = service;

  return (
    <div className={styles.service}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.description}>{desc}</p>
    </div>
  );
};

export default Service;
