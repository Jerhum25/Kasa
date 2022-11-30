import { useState } from "react";
import vectorUp from "../assets/img/Vector-up.png";
import vectorDown from "../assets/img/Vector-down.png";

const Collapse = ({ title, description }) => {
  const [open, setOpen] = useState(false);
  const classToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="collapse">
        <div className="title">
          <h3>{title}</h3>
          <img
            src={open === false ? vectorDown : vectorUp}
            className={open === true ? "active" : ""}
            alt={open === false ? "vector up" : "vector down"}
            onClick={classToggle}
          />
        </div>
        {open && <div className="description visible">{description}</div>}
      </div>
    </>
  );
};

export default Collapse;
