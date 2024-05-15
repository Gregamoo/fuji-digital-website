import styled from "styled-components";
import Logo from "../Logo/Logo";
import { StyledImageLogo, StyledTextLogo } from "../Logo/Logo.styles";

export const StyledFooter = styled.div`
  background: #ebf0f7;
  padding: 1rem;
`;

export const StyledLogo = styled(Logo)`
  column-gap: 1rem;
  justify-content: left;

  ${StyledImageLogo} {
    height: 4.5rem;
  }
  ${StyledTextLogo} {
    height: 3.5rem;
  }
`;

export const StyledFooterBody = styled.div`
  padding: 1rem;
  color: #5f00f8;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  a {
    font-weight: normal;
  }
`;
