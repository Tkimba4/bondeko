import { QuotesIcon, UserCircleIcon } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import styles from "./Testimonial.module.scss";
const Testimonial = ({ data }) => {
  const { name, message, img } = data;
  return (
    <div className={styles.testimonial}>
      <QuotesIcon weight="duotone" />
      <p className={styles.message}>{message}</p>
      <div className={styles.patient}>
        <UserCircleIcon weight="light" />
        <span className={styles.name}>{name}</span>
      </div>
    </div>
  );
};

export default Testimonial;
