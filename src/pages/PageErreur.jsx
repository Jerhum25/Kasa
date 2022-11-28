import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const PageErreur = () => {
  return (
    <div className="pageErreur">
      <Navigation />
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">
        <li className="retourAccueil">Retourner à la page d'accueil</li>
      </NavLink>
      <Footer />
    </div>
  );
};

export default PageErreur;
