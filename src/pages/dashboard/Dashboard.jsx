import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
// import { dayStats } from "../../db/data";
import DashboardStatistique from "../../components/dashbord-statistiques";
// import ReservationConfirmed from "../../components/reservation-confirmed";
// import { PlusIcon } from "@phosphor-icons/react";
// import ModalReservations from "../../components/appointments-modal";

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
import { apFilter } from "../../helpers/functions";
import AppointmentsModal from "../../components/appointments-modal";
// import { getAppointments } from "../../api/appointmentsApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppointments } from "../../features/appointmentsSlice";

const Dashboard = () => {
  // const [manage, setManage] = useState(false);
  const dispatch = useDispatch()
  const {appointments} = useSelector((state) => state.appointments)

  useEffect(() => {
    if(!appointments.length){
      dispatch(fetchAppointments())
    }
  }, [appointments]);
  

  return (
    <div className={styles.dashboard}>
      <Section className={styles.statistiques}>
        <div className={styles.statistiques_content}>
          {statistiques.map((stat) => (
            <DashboardStatistique
              elements={stat}
              stat={apFilter(appointments, ["state", stat.filter])}
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
              {apFilter(appointments, ["state", "WAITING"]).map((res) => (
                <AppointementCard info={res} />
              ))}
            </div>
            <div className={styles.waiting_btn}>
              <Link to="" onClick={(e) => " setManage(true)"}>
                Gérér les demandes
              </Link>
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
                  apFilter(appointments, ["state", "ACCEPTED"]).length
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

      {/* <AppointmentsModal
        open={manage}
        setOpen={setManage}
        appointments={appointments}
      ></AppointmentsModal> */}
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
