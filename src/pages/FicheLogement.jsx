import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { rentalList } from "../datas/locations";
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";

const FicheLogement = () => {
  let { id } = useParams();
  const getOneLocation = (id) => {
    return rentalList.find((log) => log.id === id);
  };

  const singleLocation = getOneLocation(id);

  return singleLocation ? (
    <div className="fiche_logement">
      <Navigation />

      <Slideshow />

      <div className="infos">
        <div className="title">
          <h1 className="rental_name">{singleLocation.title}</h1>
          <p className="rental_location">{singleLocation.location}</p>
        </div>
        <div className="profile">
          <p>{singleLocation.host.name}</p>
          <img
            src={singleLocation.host.picture}
            alt="profil"
            className="profile_photo"
          />
        </div>
        <Tags />
      </div>
      <div className="descriptions">
        <Collapse
          title="Description"
          description={singleLocation.description}
        />
        <Collapse
          title="Equipements"
          description={
            <ul>
              {singleLocation.equipments.map((index) => {
                return <li key={index}>{index}</li>;
              })}
            </ul>
          }
        />
      </div>
      <Footer />
    </div>
  ) : (
    <Navigate to="/*" />
  );
};

export default FicheLogement;
