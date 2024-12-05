import React from 'react'
import styled from 'styled-components'

const StyledProjects = styled.div`
  * {
    box-sizing: border-box;
    background-color: none;
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
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    --imp-text-color: #c770f0 !important;
    -webkit-text-fill-color: var(--imp-text-color) !important;
  }

  li {
    text-decoration: none;
    list-style: none;
    text-align: center;
    justify-content: center;
    justify-items: center;
    -webkit-text-fill-color: slateblue;
    font-size: 1.3rem;
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    column-gap: 1rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p, li {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }
    p, li {
      font-size: 0.9rem;
    }
  }
`;

function Projects() {
  return (
    <StyledProjects>
      <h1>Projects</h1>
      <ul>
        <li> Project 1 </li>
        <li> Project 2 </li>
        <li> Project 3 </li>
        <li> Project 4 </li>
      </ul>
      {/* <p> Project 1 </p>
      <p> Project 2 </p>
      <p> Project 3 </p>
      <p> Project 4 </p> */}
    </StyledProjects>
  );
}

export default Projects
