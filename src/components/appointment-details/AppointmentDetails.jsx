import {
  CheckCircleIcon,
  EnvelopeSimpleIcon,
  PhoneIcon,
  XCircleIcon,
} from "@phosphor-icons/react";
import styles from "./AppointmentDetails.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAppointment,
  updateAppointment,
} from "../../features/appointmentsSlice";

const AppointementDetail = ({ appointmentId, deleteAppointment }) => {
  const {appointments} = useSelector(state => state.appointments)
  const appointment = appointments.filter(ap => ap.id === appointmentId)[0]
  const dispatch = useDispatch();

  let {
    first_name,
    last_name,
    phone,
    email,
    birthday,
    sex,
    date,
    time,
    service,
    motif,
    state,
    id,
    created_at,
  } = appointment;
  if (time === 0) {
    time = "Avant midi";
  } else {
    time = "Après midi";
  }

  function handleAction(e) {
    const state = e.currentTarget.getAttribute("data-action");
    e.preventDefault();

    dispatch(
      updateAppointment({
        id,
        state,
      })
    );
  }

  return (
    <div className={styles.details} data-id={id}>
      <header className={styles.header}>
        {appointment.state === "WAITING" ? (
          <>
            <div className={styles.waiting_state}>Attente</div>

            <div className={styles.header_cta}>
              <button
                className={`${styles.btn} btn`}
                onClick={handleAction}
                data-action="CONFIRMED"
              >
                <span>
                  <CheckCircleIcon />
                </span>
                <span>Confrmer</span>
              </button>
              <button
                className={`${styles.btn} btn`}
                onClick={handleAction}
                data-action="CANCELED"
              >
                <span>
                  <XCircleIcon />
                </span>
                <span>Annuler</span>
              </button>
            </div>
          </>
        ) : state === "CANCELED" ? (
          <div className={styles.canceled_state}>Annulé</div>
        ) : state === "CONFIRMED" ? (
          <div className={styles.confirmed_state}>Confirmé</div>
        ) : null}
      </header>
      <div className={styles.profil}>
        <div className={styles.profil_img}>
          <div className="img"></div>
        </div>
        <div className={styles.profil_text}>
          <h4 className={styles.name}>
            {first_name} {last_name}
          </h4>
          <div className={styles.profil_infos}>
            <a href={`mailto:${email}`} className={styles.email}>
              <EnvelopeSimpleIcon /> <span>{email}</span>
            </a>
            <a href={`tel:${phone}`} className={styles.phone}>
              <PhoneIcon /> <span>{phone}</span>
            </a>
            <p>
              Sexe : <span>{sex}</span>
            </p>
            <p>
              Date de naissance : <span>{birthday}</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.consultation_info}>
        <div className={styles.info_group}>
          <h5 className={styles.title}>Service demandé</h5>
          <span className={styles.info_value}>{service}</span>
        </div>
        <div className={styles.info_group}>
          <h5 className={styles.title}>Date et temps souhaité</h5>
          <div className={styles.info_text}>
            <span className={styles.info_value}>{date}</span> {" - "}
            <span className={styles.info_value}>{time}</span>
          </div>
        </div>
        <div className={styles.info_group}>
          <h5 className={styles.title}>Date de demande</h5>
          <div className={styles.info_text}>
            <span className={styles.info_value}>{created_at}</span>
          </div>
        </div>
        <div className={styles.info_group}>
          <h5 className={styles.title}>Motif</h5>
          <div className={styles.info_text}>
            <p className={styles.info_value}>{motif}</p>
          </div>
        </div>
      </div>
      <div className={styles.cta_delete}>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            deleteAppointment(null)
            dispatch(removeAppointment(id));
          }}
        >
          Supprimer
        </a>
      </div>
    </div>
  );
};

export default AppointementDetail;
