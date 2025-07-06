import { CaretRightIcon, ClockIcon } from "@phosphor-icons/react";
import styles from "./AppointementCard.module.scss";

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
    created_at
  } = info;
  if (day_time === 0) {
    day_time = "Avant midi";
  } else {
    day_time = "Après midi";
  }
  
  function handle(e) {
    const card = document.querySelector(`.${styles.card}`);
    card.classList.toggle(styles.open);
    // console.log(card);
  }

  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <div className={styles.head_info}>
          <h4 className={styles.head_name}>
            {first_name} {last_name}
          </h4>
          <div className={styles.head_info}>
            {/* <span className={styles.head_service}>
                {service}
            </span> */}
            <span className={styles.head_contact}>
              {email} - {phone}
            </span>
          </div>
        </div>
        <div className={styles.head_actions}>
          <span className={styles.head_icon}>
            <ClockIcon />
          </span>
          <button className={styles.head_btn} onClick={handle}>
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
        <div className={styles.footer_cta}>
          <button className={`${styles.btn} btn`}></button>
        </div>
      </footer>
    </div>
  );
};

export default AppointementCard;
