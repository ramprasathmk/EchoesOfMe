import React from "react";
import styled from "styled-components";

const StyledFooterDetails = styled.div`
    color: ${props => props.color === 'white' ? 'white': 'red'};
    font-size: large;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export default function FooterDetails() {
  const CurrentYear = new Date().getFullYear().toString();
  const DeveloperName = "Ramprasath M K";

  return (
    <React.Fragment>
      <StyledFooterDetails color={"white"}>
        Copyright &copy; {CurrentYear}
      </StyledFooterDetails>
      <StyledFooterDetails> {DeveloperName} </StyledFooterDetails>
    </React.Fragment>
  );
}
