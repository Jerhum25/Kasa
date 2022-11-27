import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { rentalList } from "../datas/locations";
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Tags from "../components/Tags";
import DropDownFicheLogement from "../components/DropDownFicheLogement";

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

      <section className="infos">
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
      </section>

      <DropDownFicheLogement description={singleLocation.description} />
      <Footer />
    </div>
  ) : (
    <Navigate to="/*" />
  );
};

export default FicheLogement;
