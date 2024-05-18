import * as React from "react";
import {
  StyledFooter,
  StyledLogo,
  StyledFooterBody,
  StyledFooterCopyright,
  StyledIcon,
} from "./Footer.styles.js";

function Footer() {
  return (
    <StyledFooter>
      <StyledLogo version={"purple"} />
      <StyledFooterBody>
        <div>Fuji Digital Ltd.</div>
        <a href="mailto: contact@fujidigital.co.uk">
          contact@fujidigital.co.uk
        </a>
      </StyledFooterBody>
      <StyledIcon />
      <StyledFooterCopyright>
        Copyright © 2024 Fuji Digital Ltd. All rights reserved.
      </StyledFooterCopyright>
    </StyledFooter>
  );
}

export default Footer;
