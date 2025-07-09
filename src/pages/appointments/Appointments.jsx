import styles from "./appointments.module.scss";
import { useState } from "react";
import AppointmentsList from "../../components/appointments-list";
import AppointementDetail from "../../components/appointment-details";

const Appointments = () => {
  const [appointmentActive, setAppointmentActive] = useState(null);

  return (
    <div className={styles.main}>
      <div className={styles.appointments_list}>
        <div className={styles.appointments_list_container}>
          <AppointmentsList setActive={setAppointmentActive} />
        </div>
      </div>
      <div className={styles.appointment_details}>
        {appointmentActive ? (
          <AppointementDetail appointment={appointmentActive} />
        ) : (
          <div className={styles.msg_select_appointment}>
            <p>Sélectionnez un rendez-vous pour voir les détails</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;
