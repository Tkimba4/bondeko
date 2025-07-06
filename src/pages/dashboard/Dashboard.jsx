import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
// import { dayStats } from "../../db/data";
import DashboardStatistique from "../../components/dashbord-statistiques";
import ReservationConfirmed from "../../components/reservation-confirmed";
import { PlusIcon } from "@phosphor-icons/react";
import ModalReservations from "../../components/modal-reservations";

import {
  BabyIcon,
  BedIcon,
  CalendarCheckIcon,
  CalendarIcon,
  ClockUserIcon,
  EnvelopeSimpleIcon,
  MapPinLineIcon,
  PhoneIcon,
  StethoscopeIcon,
  SyringeIcon,
  UserCheckIcon,
  UsersIcon,
  XCircleIcon,
} from "@phosphor-icons/react/dist/ssr";
import Section from "../../components/section";
import { Link } from "react-router-dom";
import AppointementCard from "../../components/appointement-card";

const Dashboard = () => {
  function resFilter(data, filter) {
    const [col, val] = filter;
    if (val === "ALL") {
      return data;
    }
    return data.filter((res) => res[col] === val);
  }

  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function getReservations() {
      const data = await fetch("http://localhost:4000/bondeko/reservations");
      const resJson = await data.json();
      setReservations(resJson);
    }

    getReservations();
  }, []);

  return (
    <div className={styles.dashboard}>
      <Section className={styles.statistiques}>
        <div className={styles.statistiques_content}>
          {statistiques.map((stat) => (
            <DashboardStatistique
              elements={stat}
              stat={resFilter(reservations, ["state", stat.filter])}
              key={stat.filter}
            />
          ))}
        </div>
      </Section>
      <Section className={styles.reservations}>
        <div className={styles.reservations_content}>
          <div className={styles.waiting}>
            <h2 className="title">
              <ClockUserIcon color="orange" />
              <span>En attente</span>
            </h2>
            <p>Rendez-vous récents en attente de confirmation</p>
            <div className={styles.waiting_list}>
              {resFilter(reservations, ["state", "WAITING"]).map((res) => (
                // <div className={styles.wait_res}>
                //   <h5 className={styles.wait_res_name}>
                //     {`${res.first_name} ${res.last_name}`}
                //   </h5>
                //   <p className={styles.wait_res_info}>
                //     {` ${res.service_id} - ${res.day_date}`}
                //   </p>
                // </div>
                <AppointementCard info={res} />
              ))}
            </div>
              <div className={styles.waiting_btn}>
                <Link to="">Gérér les demandes</Link>
              </div>
          </div>
          <div className={styles.planing}>
            <h2 className="title">
              <CalendarIcon />
              <span>Aujourd'hui</span>
            </h2>
            <p>
              {`
                ${
                  resFilter(reservations, ["state", "ACCEPTED"]).length
                } Rendez-vous aujourd'hui
              `}
            </p>
            <div className={styles.planing_content}>
              {/* {["d", "d", "d", "", ""].map((r, key) => (
                <ReservationConfirmed key={key} />
              ))} */}
            </div>
          </div>
        </div>
      </Section>
      {/* <button className={styles.btnForm}>
        <PlusIcon width={50} />
      </button> */}

      {/* <ModalReservations></ModalReservations> */}
    </div>
  );
};

const statistiques = [
  {
    // id: "",
    filter: "ALL",
    title: "Total",
    icon: <UsersIcon color="" />,
    description: "Total RDV",
  },
  {
    // id: "",
    filter: "CONFIRMED",
    title: "Confirmés",
    icon: <CalendarCheckIcon color="blue" />,
    description: "En attente",
  },
  {
    // id: "",
    filter: "WAITING",
    title: "Attente",
    icon: <ClockUserIcon color="orange" />,
    description: "En attente",
  },
  {
    // id: "",
    filter: "ACCEPTED",
    title: "Accepté",
    icon: <UserCheckIcon color="green" />,
    description: "RDV confirmés",
  },
  {
    // id: "",
    filter: "CANCELED",
    title: "Annuler",
    icon: <XCircleIcon color="red" />,
    description: "RDV annulés",
  },
];

export default Dashboard;
