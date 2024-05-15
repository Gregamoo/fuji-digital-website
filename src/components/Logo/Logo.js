import * as React from "react";
import "./Logo.css";
import logo from "../../images/logo/fuji-digital-logo.svg";
import textLogo from "../../images/logo/fuji-digital-text-logo-white.svg";

function Logo() {
  return (
    <div className="LogoContainer">
      <img src={logo} alt="Fuji Digital Logo" className="Logo" />
      <img src={textLogo} alt="Fuji Digital" className="textLogo" />
    </div>
  );
}

export default Logo;
