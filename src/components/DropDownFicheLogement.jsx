import { useState } from "react";
import { rentalList } from "../datas/locations";

import { useParams } from "react-router-dom";

const DropDownFicheLogement = ({ title, description }) => {
  let { id } = useParams();
  const getOneLocation = (id) => {
    return rentalList.find((log) => log.id === id);
  };

  const singleLocation = getOneLocation(id);

  const [openDescription, setOpenDescription] = useState(false);
  const classToggleDescription = (e) => {
    setOpenDescription(!openDescription);
  };
  const [openEquipments, setOpenEquipments] = useState(false);
  const classToggleEquipments = (e) => {
    setOpenEquipments(!openEquipments);
  };

  return (
    <section className="descriptions">
      <div className="description">
        <div className="title_description">
          <h3>Description</h3>
          <img
            src={
              openDescription === false
                ? "../../assets/img/Vector-down.png"
                : "../../assets/img/Vector-up.png"
            }
            alt={openDescription === false ? "vector up" : "vector down"}
            onClick={classToggleDescription}
          />
        </div>
        {openDescription && (
          <p className="visible">{description}</p>
        )}
      </div>
      <div className="description">
        <div className="title_description">
          <h3>Équipements</h3>
          <img
            src={
                openEquipments === false
                ? "../../assets/img/Vector-down.png"
                : "../../assets/img/Vector-up.png"
            }
            alt={openEquipments === false ? "vector up" : "vector down"}
            onClick={classToggleEquipments}
          />
        </div>

        {openEquipments && (
          <ul className="visible">
            {singleLocation.equipments.map((index) => {
              return <li key={index}>{index}</li>;
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default DropDownFicheLogement;
