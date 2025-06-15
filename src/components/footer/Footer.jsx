import React from "react";
import styles from "./Footer.module.scss";
import { links } from "../../db/data";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <div className="container">
          <div className={styles.navContent}>
            <div className={styles.menu}>
              {links.map((link) => (
                <li key={link.name} className={styles.menuItem}>
                  <Link to={link.link}>{link.text}</Link>
                </li>
              ))}
            </div>
            <div className="">
              <p>
                By <a href="">Israël Bokolombe</a>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
