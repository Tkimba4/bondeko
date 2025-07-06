import React from "react";
import styles from "./ReservationConfirmed.module.scss";
import { CaretRightIcon, UserCircleIcon } from "@phosphor-icons/react";

const ReservationConfirmed = ({ info }) => {
//   const { id, last_name, first_name, sex, ...inu } = info;
  return (
    <div className={styles.reservation}>
      <div className={styles.avatar}>
        {/* <img src="" alt="" /> */}
        <span className={styles.sex}>
            {"M"}
        </span>
      </div>
      <div className={styles.text}>
        <h5 className={styles.name}>Lorem, ipsum dolor.</h5>
        <div className={styles.number}>
          <span className={styles.age}>25 ans</span>
          <span>+242 842 446 580</span>
        </div>
        <p className={styles.service}>{"Service Service"}</p>
      </div>
      <button>
        <CaretRightIcon width={30} height={30} />
      </button>
    </div>
  );
};

export default ReservationConfirmed;
