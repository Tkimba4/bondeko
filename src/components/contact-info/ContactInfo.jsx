import React from "react";
import styles from "./ContactInfo.module.scss";
const ContactInfo = ({ data }) => {
  const { icon, label, value } = data;
  return (
    <div className={styles.contactInfo}>
      {icon}
      <h6 className={styles.label}>{label}</h6>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export default ContactInfo;
