import * as React from "react";
import { StyledFooter, StyledLogo, StyledFooterBody } from "./Footer.styles.js";
import Icon from "../SocialIcons/Icon.js";

function Footer() {
  return (
    <StyledFooter>
      <StyledLogo version={"purple"} />
      <StyledFooterBody>
        Fuji Digital Ltd.{" "}
        <a href="mailto: contact@fujidigital.co.uk">
          contact@fujidigital.co.uk
        </a>
      </StyledFooterBody>
      <Icon />
    </StyledFooter>
  );
}

export default Footer;
