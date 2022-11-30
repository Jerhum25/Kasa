import React from "react";
import logo from "../assets/img/logo_footer.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="logo kasa" />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
