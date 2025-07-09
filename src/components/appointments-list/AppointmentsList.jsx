import { useEffect } from "react";
import { fetchAppointments } from "../../features/appointmentsSlice";
import { useDispatch, useSelector } from "react-redux";

import styles from "./AppointmentsList.module.scss";
import { CheckIcon, ClockUserIcon, XIcon } from "@phosphor-icons/react";
const AppointmentsList = ({ setActive }) => {
  const { appointments } = useSelector((state) => state.appointments);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!appointments.length) {
      dispatch(fetchAppointments());
    }
  }, [appointments]);

  return (
    <div>
      <h2 className="title">Gestion</h2>

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
          // onChange={search}
        />
      </form>
      {/* <div className={styles.filters}>filters...</div> */}
      <ul className={styles.appointments_list}>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <AppointmentItem appointment={appointment} setActive={setActive} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const AppointmentItem = ({ appointment, setActive }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setActive(appointment);

    document.querySelectorAll(`.${styles.appointment_item}`).forEach((li) => {
      li.classList.remove(styles.active);
    });
    e.currentTarget.classList.add(styles.active);
  };
  return (
    <a
      className={styles.appointment_item}
      href={appointment.id}
      title={`${appointment.state} | ${appointment.first_name} ${appointment.last_name} - ${appointment.service}`}
      onClick={handleClick}
      data-id={appointment.id}
    >
      <div className={styles.appointment_info}>
        <h3 className={styles.appointment_name}>
          {appointment.first_name} {appointment.last_name}
        </h3>
        <p className={styles.appointment_description}>
          <span className={styles.appointment_service}>
            {appointment.service}
          </span>
          {" - "}
          <span className={styles.appointment_date}>{appointment.date}</span>
        </p>
      </div>
      <div className={styles.appointment_state}>
        <span className={`${styles.state} ${styles.state_waiting}`}>
          {appointment.state === "WAITING" ? (
            <ClockUserIcon  color="orange" />
          ) : appointment.state === "CONFIRMED" ? (
            <CheckIcon color="green" />
          ) : (
            <XIcon color="red" />
          )}
        </span>
      </div>
    </a>
  );
};

export default AppointmentsList;
