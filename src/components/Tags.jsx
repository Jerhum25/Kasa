import { rentalList } from "../datas/locations";
import { useParams } from "react-router-dom";
import redStar from "../assets/img/red-star.png";
import greyStar from "../assets/img/grey-star.png";

const Tags = () => {
  // je récupère l'id dans l'URL
  let { id } = useParams();
  // je récupère la location en fonction de l'id
  const getOneLocation = (id) => {
    return rentalList.find((logement) => logement.id === id);
  };

  const singleLocation = getOneLocation(id);

  // je récupère les tags et rating de la location
  const tags = singleLocation.tags;
  const rating = singleLocation.rating;

  const stars = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="tags_name">
        {tags.map((tags) => {
          return (
            <div className="tags" key={tags}>
              {tags}
            </div>
          );
        })}
      </div>

      <div className="rating">
        {stars.map((star) =>
          rating >= star ? (
            <img
              src={redStar}
              className="star"
              key={star.toString()}
              alt="étoile"
            />
          ) : (
            <img
              src={greyStar}
              className="star"
              key={star.toString()}
              alt="étoile"
            />
          )
        )}
      </div>
    </>
  );
};

export default Tags;
