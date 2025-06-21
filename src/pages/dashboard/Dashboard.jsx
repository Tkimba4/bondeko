import React from "react";
import styles from "./Dashboard.module.scss";
import { dayStats } from "../../db/data";
import DashboardStatistique from "../../components/dashbord-statistiques";
import ReservationConfirmed from "../../components/reservation-confirmed";
import { PlusIcon } from "@phosphor-icons/react";
import ModalReservations from "../../components/modal-reservations";

const Dashboard = () => {
  // const btns_filter = [
  //   {
  //     id: "all",
  //     name: "Tout",
  //   },
  //   {
  //     id: "waiting",
  //     name: "Attente",
  //   },
  //   {
  //     id: "confirm",
  //     name: "Validés",
  //   },
  //   {
  //     id: "reset",
  //     name: "Annuler",
  //   },
  // ];
  return (
    <div className={styles.dashboard}>
      <section className={styles.day_stats}>
        <div className="container">
          <h2 className="title">Aujourd'hui</h2>
          <div className={styles.day_stats_content}>
            {dayStats.map((stat, key) => (
              <DashboardStatistique elements={stat} key={key} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.planing}>
        <div className="container">
          <h2 className="title">Plan de la journée</h2>
          <div className={styles.planing_content}>
            {["d", "d", "d", "", ""].map((r, key) => (
              <ReservationConfirmed key={key} />
            ))}
            {/* <div className={styles.last_reservation}>
              <h2 className="title">Récents</h2>
              <div className={styles.last_reservation_content}>
                <div className={styles.last_reservation_header}>
                  {btns_filter.map((filter) => (
                    <button key={filter.id} className={styles.filter}>
                      {filter.name}
                    </button>
                  ))}
                </div>
                <div className={styles.last_reservation_main}></div>
              </div>
            </div> */}
            {/* <div className={styles.plannig}></div> */}
          </div>
        </div>
      </section>
      <button className={styles.btnForm}>
        <PlusIcon width={50} />
      </button>

      <ModalReservations ></ModalReservations>
    </div>
  );
};

export default Dashboard;
