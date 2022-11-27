import React from "react";
import BannerHome from "../components/BannerHome";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <BannerHome />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
