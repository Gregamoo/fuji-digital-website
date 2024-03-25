import * as React from "react";
import "./Logo.css";
import logo from "../images/Fuji Digital Logo.png";
import textLogo from "../images/FUJI DIGITAL text logo WHITE.png";

function Logo() {
  return (
    <div className="LogoContainer">
      <img src={logo} alt="Fuji Digital Logo" className="Logo" />
      <img src={textLogo} alt="Fuji Digital" className="textLogo" />
    </div>
  );
}

export default Logo;
