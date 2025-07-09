import React, { useEffect, useState } from "react";
import styles from "./ReservationForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../features/servicesSlice";
import { addAppointment } from "../../features/appointmentsSlice";

const ReservationForm = () => {
  const { services } = useSelector((state) => state.services);
  const dispatch = useDispatch();

  const [formData, setFormatData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    birthday: "",
    date: "",
    time: "",
    service: "",
    motif: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormatData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addAppointment(formData));

    setFormatData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      birthday: "",
      date: "",
      time: "",
      service: "",
      motif: "",
    });
  };

  useEffect(() => {
    if (!services.length) {
      dispatch(fetchServices());
    }
  }, [services]);

  const minDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    // Formater au format YYYY-MM-DD (nécessaire pour l'attribut min)
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    const minDate = `${yyyy}-${mm}-${dd}`;
    return minDate;
  };

  console.log(services);
  return (
    <>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={`${styles.fieldsetUser}`}>
          <legend>Info</legend>
          <div className={`${styles.formGroup} ${styles.first_name}`}>
            <label htmlFor="first_name">Prénom*</label>
            <input
              type="text"
              required
              name="first_name"
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
            <p className={styles.error}></p>
          </div>
          <div className={`${styles.formGroup} ${styles.last_name}`}>
            <label htmlFor="last_name">Nom*</label>
            <input
              type="text"
              required
              name="last_name"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
            <p className={styles.error}></p>
          </div>
          <div className={`${styles.formGroup} ${styles.email}`}>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              required
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            <p className={styles.error}></p>
          </div>
          <div className={`${styles.formGroup} ${styles.phone}`}>
            <label htmlFor="phone">Tél.</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <p className={styles.error}></p>
          </div>
          <div className={`${styles.formGroup} ${styles.birthday}`}>
            <label htmlFor="birthday">Date de naissance*</label>
            <input
              type="date"
              required
              name="birthday"
              id="birthday"
              value={formData.birthday}
              onChange={handleChange}
            />
            <p className={styles.error}></p>
          </div>
        </fieldset>
        <fieldset className={`${styles.fieldsetInfo}`}>
          <legend>Médical</legend>
          <div className={`${styles.formGroup} ${styles.service}`}>
            <label htmlFor="service">Service*</label>
            <select
              required
              name="service"
              id="service"
              defaultValue={formData.service}
              onChange={handleChange}
            >
              {services.map((service, key) => (
                <option key={key} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
            <p className={styles.error}></p>
          </div>
          <div className={`${styles.formGroup} ${styles.date}`}>
            <label htmlFor="date">Date souhaité</label>
            <input
              type="date"
              required
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              min={minDate()}
            />
            <p className={styles.error}></p>
          </div>
          <div className={`${styles.formGroup} ${styles.time}`}>
            <label htmlFor="time">Heure souhaité</label>
            <select
              required
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
            >
              <option value={0} defaultValue>
                {"Avant midi"}
              </option>
              <option value={1}>{"Après midi"}</option>
            </select>
            <p className={styles.error}></p>
          </div>
          <div className={`${styles.formGroup} ${styles.motif}`}>
            <label htmlFor="motif">Motif de la consultation</label>
            <textarea
              name="motif"
              rows={5}
              id="motif"
              value={formData.motif}
              onChange={handleChange}
            />
            <p className={styles.error}></p>
          </div>
          {/* <div className={`${styles.formGroup} ${styles.note}`}>
            <label htmlFor="note">Note supplémentaire</label>
            <textarea name="note" id="note" rows={5} />
            <p className={styles.error}></p>
          </div> */}
        </fieldset>
        <fieldset>
          <button type="submit">Confirmer le rendez-vous</button>
          <button type="reset">Annuler</button>
        </fieldset>
      </form>
    </>
  );
};

export default ReservationForm;
