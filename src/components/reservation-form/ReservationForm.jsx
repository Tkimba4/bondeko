import React from "react";
import styles from "./Reservation.module.scss";

const ReservationForm = () => {
  return (
    <div>
      <h2 className="title">Réservation de rendez-vous</h2>
      <p>
        Remplissez le formulaire ci-dessous pour prendre rendez-vous. Notre
        équipe vous contactera pour confirmer votre rendez-vous.
      </p>
      <form action="">
        <fieldset>
          <figcaption>Info personnelles</figcaption>

          <div className={styles.group}>
            <div className={styles.field}>
              <label htmlFor="name">Nom *</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className={styles.field}>
              <label htmlFor="name">Nom *</label>
              <input type="text" id="name" name="name" />
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.field}>
              <label htmlFor="name">Nom *</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className={styles.field}>
              <label htmlFor="name">Nom *</label>
              <input type="text" id="name" name="name" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <figcaption>Info</figcaption>
          <div className={styles.group}>
            <div className={styles.field}>
              <label htmlFor="name">Nom *</label>
              <input type="text" id="name" name="name" />
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.field}>
              <label htmlFor="name">Nom *</label>
              <input type="text" id="name" name="name" />
            </div>
          </div>
          <div className={styles.groupTime}>
            <div className={styles.field}>
              <label htmlFor="name">Date souhaité *</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className={styles.field}>
              <label htmlFor="name">Heure souhaité *</label>
              <input type="text" id="name" name="name" />
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.field}>
              <label htmlFor="name">Nom *</label>
              <input type="text" id="name" name="name" />
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.field}>
              <label htmlFor="name">Nom *</label>
              <input type="text" id="name" name="name" />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ReservationForm;
