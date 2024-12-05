import React from 'react'
import styled from 'styled-components'
import Tools from './ToolStack'

const StyledAbout = styled.div`
  margin-top: 0 1rem;
  padding-top: 0 1rem;
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0 1rem;
    padding: 0 1rem;
  }
  h1 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 2.5rem;
    font-weight: 500;
    text-align: center;
    justify-content: center;
    justify-items: center;
  }
  p {
    font-size: 1.3rem;
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
    --imp-text-color: #c770f0 !important;
    -webkit-text-fill-color: var(--imp-text-color) !important;
  }
`;

function About() {
  return (
    <>
      <StyledAbout>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis harum
          commodi odio quas non nulla esse, iure quos praesentium labore.
          Veritatis maiores quod quibusdam blanditiis reiciendis harum neque,
          est cupiditate!
        </p>
      </StyledAbout>
      <Tools />
    </>
  );
}

export default About