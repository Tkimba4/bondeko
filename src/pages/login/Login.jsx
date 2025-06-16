import React from "react";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, LockKeyIcon } from "@phosphor-icons/react/dist/ssr";

const Login = () => {
  return (
    <>
      <section className={styles.login}>
        <div className="container">
          <div className={styles.loginContent}>
              <div className={styles.icon}>
                <LockKeyIcon width={50} height={50} weight="light" />
              </div>
              {/* <h2 className="title">Admin</h2>
              <p className="subtitle">
                Connectez-vous pour acceder au panel admin
              </p> */}
            <div className={styles.body}>
              <form action="" className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="username">Email</label>
                  <input type="email" name="username" id="username" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="password">Mot de passe</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <button type="submit">Se connecter</button>
                </div>
              </form>
            </div>
            <nav className={styles.nav}>
              <Link to={"/"}>
                <ArrowLeftIcon width={24} height={24} />
                <span>Retour à l'acceuil</span>
              </Link>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
