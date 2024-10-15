import React from 'react';
import styled from "styled-components";
import SocialIcons from "./SocialIcons";
import FooterDetails from "./FooterDetails";

const StyledFooter = styled.footer`
  background-color: #000;
  /* text-decoration-color: darkseagreen; */
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  /* justify-content: center; */
  bottom: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 4em;
  border: none;
  left: 0;
  right: 0;
  column-gap: 1rem;
`;

function Footer() {

  return (
    <StyledFooter>
      <FooterDetails />
      <SocialIcons />
    </StyledFooter>
  );
}

export default Footer;