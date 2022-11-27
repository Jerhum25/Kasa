import { useState } from "react";

const DropDown = ({ title, description }) => {
  const [openDescription, setOpenDescription] = useState(false);
  const classToggle = (e) => {
    setOpenDescription(!openDescription);
  };

  return (
    <div className={`strong_point`}>
      <div className="title">
        <h3>{title}</h3>
        <img
          src={
            openDescription === false
              ? "../../assets/img/Vector-down.png"
              : "../../assets/img/Vector-up.png"
          }
          className={openDescription === true ? "active" : ""}
          alt={openDescription === false ? "vector up" : "vector down"}
          onClick={classToggle}
        />
      </div>
      {openDescription && <p className="visible">{description}</p>}
    </div>
  );
};

export default DropDown;
