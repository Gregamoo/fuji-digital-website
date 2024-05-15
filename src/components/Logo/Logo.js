import * as React from "react";
import "./Logo.css";

import logo from "../../images/logo/fuji-digital-logo.svg";
import textLogoWhite from "../../images/logo/fuji-digital-text-logo-white.svg";
import textLogoPurple from "../../images/logo/fuji-digital-text-logo-purple.svg";

function Logo({ version }) {
  let textLogo = version === "purple" ? textLogoPurple : textLogoWhite;
  return (
    <div className="LogoContainer">
      <img src={logo} alt="Fuji Digital Logo" className="Logo" />
      <img
        data-testid="textLogo"
        src={textLogo}
        alt="Fuji Digital Text Logo"
        className="textLogo"
      />
    </div>
  );
}

export default Logo;
