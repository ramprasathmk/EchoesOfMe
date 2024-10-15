// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0rem;

  li {
    list-style: none;
    column-gap: 0rem;
  }

  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    width: 40px;
    height: 40px;
    text-decoration: none;
  }
`;

function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://github.com/ramprasathmk">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/ramprasathmk">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/ramprasathmk053">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
}

export default SocialIcons;