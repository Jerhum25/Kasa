import React from "react";
import { Link } from "react-router-dom";

const Card = ({ cover, title, id }) => {
  return (
    <Link to={`/fichelogement/${id}`} className="card" key={id}>
      <img src={cover} alt={title} />
      <div className="gradient"></div>
      <h3>{title}</h3>
    </Link>
  );
};

export default Card;
