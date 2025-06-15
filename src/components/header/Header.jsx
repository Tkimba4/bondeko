import React from "react";
import styles from "./Header.module.scss";
import { links } from "../../db/data";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className="container">
          <div className={styles.navContent}>
            <div className={styles.logo}>
              <Link to={"/"}>Bondeko</Link>
            </div>
            <div className={styles.menu}>
              {links.map((link) => (
                <li key={link.name} className={styles.menuItem}>
                  <Link to={link.link}>{link.text}</Link>
                </li>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
