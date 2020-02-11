import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
// import logo from '../logo.svg';
import styles from "./NavbarWhite.module.css";
import { inject, PropTypes, observer } from "mobx-react";

const NavbarWhite = ({ uiStore }) => {
  const handleLogOut = e => {
    e.preventDefault();
    uiStore.logout()
  };

  return (
    <div className={styles.nav_container}>
      <NavLink to={ROUTES.home}>
        <img src="../assets/images/logo.svg" className="App-logo" alt="logo" />
      </NavLink>
      <div className={styles.nav_link}>
        <NavLink
          className={styles.nav_link__text}
          activeClassName={styles.nav_link__active}
          to={ROUTES.races}
        >
          Kies een race
        </NavLink>
        {!uiStore.authUser ? (
          <>
            <NavLink
              className={styles.nav_link__text}
              activeClassName={styles.nav_link__active}
              to={ROUTES.login}
            >
              <img
                className={styles.personIcon}
                src="../assets/images/icons/peopleBlack.svg"
                alt="icon man"
              />
              Log in
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              className={styles.nav_link__text}
              activeClassName={styles.nav_link__active}
              to="#"
            >
            {uiStore.authUser.name}
            </NavLink>
            <NavLink
              className={styles.nav_link__text}
              activeClassName={styles.nav_link__active}
              onClick={handleLogOut}
              to={ROUTES.login}
            >
              Log out
            </NavLink>
          </>
        )}
        <select className={styles.nav_link__dropdown}>
          <option value="numberCountry">🇧🇪&nbsp; Nederlands &nbsp;</option>
          <option value="numberCountry">🇨🇮&nbsp; Italiano &nbsp;</option>
          <option value="numberCountry">🇷🇺&nbsp; Русский &nbsp;</option>
          <option value="numberCountry">🇬🇧&nbsp; English &nbsp;</option>
          <option value="numberCountry">🇪🇸&nbsp; Español &nbsp;</option>
        </select>
      </div>
    </div>
  );
};

export default inject(`uiStore`)(observer(NavbarWhite));
