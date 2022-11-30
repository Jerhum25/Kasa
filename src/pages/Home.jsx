import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Banner bannerTitle="Chez vous, partout et ailleurs" />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
