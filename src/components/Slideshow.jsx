import { useState } from "react";
import { rentalList } from "../datas/locations";
import { useParams } from "react-router-dom";
import vectorLeft from "../assets/img/Vector-left.png";
import vectorRight from "../assets/img/Vector-right.png";

const Slideshow = () => {
  let { id } = useParams();
  const getOneLocation = (id) => {
    return rentalList.find((log) => log.id === id);
  };

  const singleLocation = getOneLocation(id);
  const singleImage = singleLocation.pictures;

  // j'initialise le useState pour passer à la photo suivante/précédente
  const [current, setCurrent] = useState(0);
  const length = singleImage.length;

  const previousPicture = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextPicture = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="carrousel">
      {singleImage.map((image, index) => {
        return (
          <img
            key={index}
            className={
              index === current ? "photo-logement active" : "photo-logement"
            }
            src={image}
            alt="logement"
          />
        );
      })}
      {length === 1 ? (
        ""
      ) : (
        <>
          <img
            src={vectorLeft}
            alt="flèche gauche"
            className="vector-left"
            onClick={previousPicture}
          />

          <img
            src={vectorRight}
            alt="flèche droite"
            className="vector-right"
            onClick={nextPicture}
          />

          <div className="image-number">
            {current + 1} / {length}
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;
