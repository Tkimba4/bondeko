import React from "react";
import styles from "./Footer.module.scss";
import { links } from "../../db/data";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="container">
          <div className={styles.menu}>
            {links.map((link) => (
              <li key={link.name}>
                <Link to={link.link}>{link.text}</Link>
              </li>
            ))}
          </div>
          <div className="">
            
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
