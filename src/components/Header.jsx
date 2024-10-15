import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.header`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 22px;
  font-weight: bolder;
  background-color: white;
  text-align: center;
  text-decoration: none;
  width: 100%;
  max-width: 1000%;
  left: 0;
  right: 0;

  h1 {
    color: red;
    cursor: none;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Hi Techie&rsquo;s 👋</h1>
    </StyledHeader>
  );
}

export default Header;