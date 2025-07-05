import React from "react";
import styles from "./Home.module.scss";
import {
  contact,
  services,
  statistiques,
  // team,
  testimonials,
} from "../../db/data";
import Service from "../../components/service";
import Statistique from "../../components/statistique";
import Testimonial from "../../components/testimonial";
import ContactInfo from "../../components/contact-info";
import { CalendarDotsIcon } from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <section className={styles.hero}>
        <div className={`${styles.heroContent} container`}>
          <div className={styles.heroText}>
            <h1 className="bigTitle">
              Votre santé, <br /> notre priorité
            </h1>
            <p className={styles.heroSubtitle}>
              Des soins de qualité avec une équipe médicale expérimentée. <br />
              Prenez rendez-vous facilement en ligne.
              {/* et bénéficiez d'un suivi */}
              personnalisé.
            </p>
            <div className={styles.heroCTA}>
              <Link to={"/reservation"} className={styles.heroCTA1}>
                <CalendarDotsIcon width={20} height={20} />
                <span>Prendre rendez-vous</span>
              </Link>
              <a href="#" className={styles.heroCTA2}>
                Nos services
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.services}>
        <div className={`container`}>
          <div className={styles.servicesContent}>
            <div className={styles.servicesText}>
              <h2 className="title">Nos sevices</h2>
              <p className="subtitle">
                Une gamme complète de services médicaux avec des équipements de
                pointe
              </p>
            </div>
            <div className={styles.servicesList}>
              {services.map((service) => (
                <Service
                  key={service}
                  service={service}
                  // className={styles.service}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.aboutIllustration}>
              <img src="img/about.jpg" alt="" />
            </div>
            <div className={styles.aboutText}>
              <h2 className="title">Notre engagement</h2>
              <p className="subtitle">
                La Clinique Bondeko est un établissement médical innovant en
                République Démocratique du Congo, axé sur des soins accessibles
                et de qualité dans diverses spécialités hospitalières.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.statistiques}>
        <div className="container">
          <div className={styles.statistiquesContent}>
            {statistiques.map((statistique) => (
              <Statistique key={statistique.id} data={statistique} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.whyUs}>
        <div className="container">
          <div className={styles.whyUsContent}>
            <div className={styles.whyUsIllustration}>
              <img src="img/why-us.jpg" alt="" />
            </div>
            <div className={styles.whyUsText}>
              <h2 className="title">Pourquoi nous choisir</h2>
              <p className="subtitle">
                Une clinique qui allie expertise médicale, attention
                personnalisée et engagement communautaire pour votre bien-être.
              </p>
              <ul>
                <li>Expertise</li>
                <li>Humanité</li>
                <li>Engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <section className={styles.team}>
        <div className="container">
          <h2 className="title">Notre équipe</h2>
          <p className="subtitle">
            Rencontrez nos professionnels de la santé, dédiés à fournir des
            soins de qualité et un soutien personnalisé à chaque patient.
          </p>
          <div className={styles.teamContent}>
            {team.map((member) => (
              <div key={member.img} className={styles.member}>
                <div className={styles.memberImg}>
                  <img
                    src={member.img}
                    alt={member.name}
                    width={200}
                    height={200}
                  />
                </div>
                <h5>{member.name}</h5>
                <p>{member.function}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className={styles.testimonials}>
        <div className="container">
          <h2 className="title center">Témoignages des patients</h2>
          <p className="subtitle center">
            Ce que nos patients disent de la qualité de nos services
          </p>
          <div className={styles.testimonialsContent}>
            {testimonials.map((testimonail) => (
              <Testimonial key={testimonail.id} data={testimonail} />
            ))}
            {/* <div className={styles.testimonialsText}>
            </div>
            <div className={styles.testimonialsList}>
            </div> */}
          </div>
        </div>
      </section>
      <section className={styles.reservation}>
        <div className="container">
          <div className={styles.reservationContent}>
            <h2 className="title">Prenez soin de votre santé aujourd’hui!</h2>
            <p className="subtitle">
              Contactez-nous dès maintenant pour planifier votre consultation et
              découvrir nos services de santé de qualité.
            </p>
            <div className={styles.reservationContent}>
              <Link to={"/reservation"} className={styles.reservationCTA}>
                <CalendarDotsIcon width={20} height={20} />
                <span>Prendre rendez-vous</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.contant}>
        <div className="container">
          <h2 className="title center">Contactez-nous</h2>
          <p className="subtitle center">
            Nous sommes là pour répondre à vos questions
          </p>
          <div className={styles.contactContent}>
            <div className={styles.contactIllustration}>
              <img src="img/contact.jpg" alt="" />
            </div>
            <div className={styles.contactText}>
              {contact.map((c, index) => (
                <ContactInfo key={index} data={c} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
