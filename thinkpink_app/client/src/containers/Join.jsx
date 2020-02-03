import React from "react";
// import styles from "./Info.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import Race from "../components/Race.jsx"
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

const Join = () => {
  return (
    <div>
        <div>
          <NavbarWhite />
          <h1>Bedankt voor je enthousiasme!</h1>
          <p>kies hoe je een lotgenoot wilt toevoegen:</p>

          <NavLink to="ROUTES.join2">test</NavLink>
        </div>
    </div>
  );
};

export default Join;