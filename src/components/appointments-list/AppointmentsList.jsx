import { useEffect, useState } from "react";
import { fetchAppointments } from "../../features/appointmentsSlice";
import { useDispatch, useSelector } from "react-redux";

import styles from "./AppointmentsList.module.scss";
import {
  CheckIcon,
  ClockUserIcon,
  SortAscendingIcon,
  XIcon,
} from "@phosphor-icons/react";
import { apFilter } from "../../helpers/functions";
const AppointmentsList = ({ setActive, active }) => {
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [search, setSearch] = useState('');
  const { appointments } = useSelector((state) => state.appointments);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!appointments.length) {
      dispatch(fetchAppointments());
      setAppointmentsList(appointments);
    }
  }, [appointments]);
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setActive(null);
      }
    });
  }, []);
  
  useEffect(()=>{

  }, [])

  function handleSearch(e){
    // setSearch(e.currentTarget.value)
    // const results = appointments.filter(ap => ap.first_name.includes(search));
    // setAppointmentsList(results)
  }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2 className="title">Gestion</h2>
        {/* <div className={styles.filters_container}>
          <button className={styles.btn_filter}>
            <SortAscendingIcon />
          </button>
        </div> */}
      </div>

      <form
        action=""
        className={styles.form}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="search"
          name="search"
          id="search"
          value={search}
          onChange={handleSearch}
          required
          placeholder="Recherchez un nom..."
          // onChange={search}
        />
      </form>
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
    setActive(appointment.id);

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
            <ClockUserIcon color="orange" />
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
