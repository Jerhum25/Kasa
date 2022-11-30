import React from "react";

const Banner = ({ bannerTitle }) => {
  return (
    <div className="banner">
      <div className="ombrage"></div>
      <h2>{bannerTitle}</h2>
    </div>
  );
};

export default Banner;
