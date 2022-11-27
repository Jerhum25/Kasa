import { rentalList } from "../datas/locations";
import { useParams } from "react-router-dom";

const Tags = () => {
  // je récupère l'id dans l'URL
  let { id } = useParams();
  // je récupère la location en fonction de l'id
  const getOneLocation = (id) => {
    return rentalList.find((logement) => logement.id === id);
  };

  const singleLocation = getOneLocation(id);

  // je récupère les tagset rating de la location
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
              src="../../assets/img/red-star.png"
              className="star"
              key={star.toString()}
              alt="étoile"
            />
          ) : (
            <img
              src="../../assets/img/grey-star.png"
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
