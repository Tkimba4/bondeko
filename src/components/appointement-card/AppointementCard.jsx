import {
  CaretRightIcon,
  CheckCircleIcon,
  ClockIcon,
  EnvelopeSimpleIcon,
  PhoneIcon,
  XCircleIcon,
} from "@phosphor-icons/react";
import styles from "./AppointementCard.module.scss";
import { useDispatch } from "react-redux";
import { updateAppointment } from "../../features/appointmentsSlice";

const AppointementCard = ({ info }) => {
  let {
    first_name,
    last_name,
    phone,
    email,
    birthday,
    day_date,
    day_time,
    service,
    motif,
    state,
    id,
    created_at,
  } = info;
  if (day_time === 0) {
    day_time = "Avant midi";
  } else {
    day_time = "Après midi";
  }

  //   console.log(id);

  const dispatch = useDispatch();

  function handle(e) {
    const elId = e.currentTarget.getAttribute("data-id");
    const card = document.querySelector(`.${styles.card}[data-id='${elId}']`);
    document.querySelectorAll(`.${styles.card}`).forEach((cardE) => {
      if (cardE.getAttribute("data-id") == elId) {
        card.classList.toggle(styles.open);
      } else {
        cardE.classList.remove(styles.open);
      }
    });
  }

  function handleAction(e){
    const action = e.currentTarget.getAttribute('data-action')
    e.preventDefault();

    dispatch(updateAppointment({
        id,
        state : action
        // 
    }))
  }

  return (
    <div className={styles.card} data-id={id}>
      <header className={styles.header}>
        <div className={styles.head_info}>
          <h4 className={styles.name}>
            {first_name} {last_name}
          </h4>
          <div className={styles.contact}>
            <span className={styles.email}>
              <EnvelopeSimpleIcon /> <span>{email}</span>
            </span>
            {" - "}
            <span className={styles.email}>
              <PhoneIcon /> <span>{phone}</span>
            </span>
          </div>
          {/* <div className={styles.head_info}>
            <span className={styles.head_service}>
                {service}
            </span>
          </div> */}
        </div>
        <div className={styles.head_actions}>
          {/* <ClockIcon className={styles.head_icon} /> */}
          <button
            className={styles.head_btn}
            onClick={handle}
            data-id={`${id}`}
          >
            <CaretRightIcon width={24} height={24} />
          </button>
        </div>
      </header>
      <div className={styles.body}>
        <div className={styles.info_group}>
          <h5 className={styles.title}>Informations personnelles</h5>
          <div className={styles.info_text}>
            <span className={styles.info_label}>Date de naissance :</span>
            <span className={styles.info_value}>{birthday}</span>
          </div>
        </div>
        <div className={styles.info_group}>
          <h5 className={styles.title}>Service demandé</h5>
          <div className={styles.info_text}>
            {/* <span className={styles.info_label}>Date de naissance :</span> */}
            <span className={styles.info_value}>{service}</span>
          </div>
        </div>
        <div className={styles.info_group}>
          <h5 className={styles.title}>Date et temps souhaité</h5>
          <div className={styles.info_text}>
            <span className={styles.info_value}>{day_date}</span> {" - "}
            <span className={styles.info_value}>{day_time}</span>
          </div>
        </div>
        <div className={styles.info_group}>
          <h5 className={styles.title}>Date de demande</h5>
          <div className={styles.info_text}>
            {/* <span className={styles.info_label}>Date de naissance :</span> */}
            <span className={styles.info_value}>{created_at}</span>
          </div>
        </div>
        <div className={styles.info_group}>
          <h5 className={styles.title}>Motif</h5>
          <div className={styles.info_text}>
            {/* <span className={styles.info_label}>Date de naissance :</span> */}
            <span className={styles.info_value}>{motif}</span>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        {/* <div className={styles.footer_cta}> */}
        {state === "WAITING" ? (
          // "ATTENTE"
          <>
            <div className={styles.footer_state}>Attente</div>
            <div className={styles.footer_cta}>
              <button className={`${styles.btn} btn`} onClick={handleAction} data-action="CONFIRMED">
                <span>
                  <CheckCircleIcon />
                </span>
                <span>Confrmer</span>
              </button>
              <button className={`${styles.btn} btn`}>
                <span>
                  <XCircleIcon />
                </span>
                <span>Annuler</span>
              </button>
            </div>
          </>
        ) : state === "CANCELED" ? (
          "ANULLER"
        ) : state === "CONFIRMED" ? (
          <>
            <button className={`${styles.btn} btn`}>
              <span>
                <XCircleIcon />
              </span>
              <span>Annuler</span>
            </button>
          </>
        ) : null}
        {/* </div> */}
      </footer>
    </div>
  );
};

export default AppointementCard;
