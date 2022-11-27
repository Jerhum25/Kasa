import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src="../../assets/img/LOGO.png" alt="logo" />
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
