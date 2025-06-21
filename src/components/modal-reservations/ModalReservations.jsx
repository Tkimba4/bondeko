import React from "react";
import styles from "./ModalReservations.module.scss";

const ModalReservations = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.body}>
        <form
          action=""
          className={styles.form}
          onSubmit={(e) => e.preventDefault()}
        >
            <input type="search" name="search" id="search" required placeholder="Entrez un nom..." />
        </form>
        <div className={styles.filters}>

        </div>
        <div className={styles.reservationsList}>

        </div>
      </div>
    </div>
  );
};

export default ModalReservations;
