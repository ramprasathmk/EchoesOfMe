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
  padding: 1rem;
  border-bottom: 2px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    color: red;
    cursor: none;
    transition: color 0.3s ease;
  }

  h1:hover {
    color: blue;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
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
