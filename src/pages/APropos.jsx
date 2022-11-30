import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { aProposData } from "../datas/aPropos";

const APropos = () => {
  return (
    <div className="apropos">
      <Navigation />
      <Banner />
      <div className="strong_points">
        {aProposData.map((data, index) => (
          <Collapse
            key={index}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default APropos;
