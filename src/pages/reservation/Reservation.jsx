import React, { useState } from "react";
import styles from "./Reservation.module.scss";
const Reservation = () => {
  return (
    <div>
      <section className={styles.hero}>
        <div className="container">
          <h1 className="bigTitle">Reservation</h1>
          <p className="">
            Remplissez le formulaire ci-dessous pour prendre rendez-vous. <br />{" "}
            Notre équipe vous contactera pour confirmer votre rendez-vous.
          </p>
        </div>
      </section>
      <section className={styles.main}>
        <div className="container">
          <Form></Form>
        </div>
      </section>
    </div>
  );
};

const Form = () => {
  const [field, setField] = useState([{}]);
  return (
    <>
      <form action="" className={styles.form}>
        <fieldset className={`${styles.fieldsetUser}`}>
          <legend>Info</legend>
          <div className={`${styles.formGroup} ${styles.first_name}`}>
            <label htmlFor="first_name">Prénom*</label>
            <input type="text" required name="first_name" id="first_name" />
            <p className={styles.error}></p>
          </div>
          <div className={`${styles.formGroup} ${styles.last_name}`}>
            <label htmlFor="last_name">Nom*</label>
            <input type="text" required name="last_name" id="last_name" />
            <p className={styles.error}></p>
          </div>
          <div className={`${styles.formGroup} ${styles.email}`}>
            <label htmlFor="email">Email*</label>
            <input type="email" required name="email" id="email" />
            <p className={styles.error}></p>
          </div>
          <div className={`${styles.formGroup} ${styles.phone}`}>
            <label htmlFor="phone">Tél.</label>
            <input type="tel" required name="phone" id="phone" />
            <p className={styles.error}></p>
          </div>
          <div className={`${styles.formGroup} ${styles.birthday}`}>
            <label htmlFor="birthday">Date de naissance*</label>
            <input type="date" required name="birthday" id="birthday" />
            <p className={styles.error}></p>
          </div>
        </fieldset>
        <fieldset className={`${styles.fieldsetInfo}`}>
          <legend>Médical</legend>
          <div className={`${styles.formGroup} ${styles.service}`}>
            <label htmlFor="service">Service*</label>
            <select required name="service" id="service">
              {["A", "B", "C"].map((service) => (
                <option value={service}>{service}</option>
              ))}
            </select>
            <p className={styles.error}></p>
          </div>
          <div className={`${styles.formGroup} ${styles.date}`}>
            <label htmlFor="date">Date souhaité</label>
            <input type="date" required name="date" id="date" />
            <p className={styles.error}></p>
          </div>
          <div className={`${styles.formGroup} ${styles.time}`}>
            <label htmlFor="time">Heure souhaité</label>
            <select required name="time" id="time">
              {["A", "B", "C"].map((service) => (
                <option value={service}>{service}</option>
              ))}
            </select>
            <p className={styles.error}></p>
          </div>
          <div className={`${styles.formGroup} ${styles.reason}`}>
            <label htmlFor="reason">Motif de la consultation</label>
            <textarea name="reason" rows={5} id="reason" />
            <p className={styles.error}></p>
          </div>
          <div className={`${styles.formGroup} ${styles.note}`}>
            <label htmlFor="note">Note supplémentaire</label>
            <textarea name="note" id="note" rows={5} />
            <p className={styles.error}></p>
          </div>
        </fieldset>
        <fieldset>
          <button type="submit">Confirmer le rendez-vous</button>
          <button type="reset">Annuler</button>
        </fieldset>
      </form>
    </>
  );
};

export default Reservation;
