import React from "react";
import styles from "./Dashboard.module.scss";
import { dayStats } from "../../db/data";
import DashboardStatistique from "../../components/dashbord-statistiques";

const Dashboard = () => {
  return (
    <>
      <section className={styles.day_stats}>
        <div className="container">
          <div className={styles.day_stats_content}>
            {dayStats.map((stat, key) => (
              <DashboardStatistique elements={stat} key={key} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
