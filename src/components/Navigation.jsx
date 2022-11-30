import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/LOGO.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src={logo} alt="logo" />
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/apropos">
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
