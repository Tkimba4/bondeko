import React, { useState } from "react";
import styles from "./AppointmentsModal.module.scss";
import AppointementCard from "../appointement-card";
import { XIcon } from "@phosphor-icons/react";

const AppointmentsModal = ({ appointments, setOpen, open}) => {
  const [filter, setFilter] = useState({ col: "", val: "" });


  if(!open) return null;

  function search(e){
    const {value} = e.currentTarget;

    if(value.length >= 3){
      ""
    }
  }

  return (
    <div className={styles.modal}>
      <div className={styles.body}>
        <button className={styles.bnt_close} onClick={(e) => setOpen(false)} aria-label="close">
          <XIcon />

        </button>
        <form
          action=""
          className={styles.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            name="search"
            id="search"
            required
            placeholder="Entrez un nom..."
            onChange={search}
          />
        </form>
        <div className={styles.filters}></div>
        <div className={styles.appointments}>
          {appointments.map(appointment => (
            <AppointementCard info={appointment} key={appointment.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentsModal;
