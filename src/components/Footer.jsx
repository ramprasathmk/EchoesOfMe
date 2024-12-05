import React from 'react';
import styled from "styled-components";
import SocialIcons from "./SocialIcons";
import FooterDetails from "./FooterDetails";

const StyledFooter = styled.footer`
  background-color: #000;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 4em;
  border: none;
  left: 0;
  right: 0;
  column-gap: 1rem;

  @media (max-width: 768px) {
    height: 3em;
  }

  @media (max-width: 480px) {
    height: 2.5em;
  }

  @media (max-width: 320px) {
    height: 2em;
  }

  &:hover {
    background-color: #333;
    transition: background-color 0.3s ease;
  }
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
