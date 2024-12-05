import React from 'react';
import styled from 'styled-components';

const StyledResume = styled.div`
  margin: 2rem;
  padding: 2rem;
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function Resume() {
  return (
    <StyledResume>
      <h1>Resume</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis
        consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate
        ut ligula. Vestibulum sit amet urna turpis. Praesent tincidunt
        vestibulum ligula, sed viverra erat tempus nec. Pellentesque auctor
        neque nec urna proin sapien.
      </p>
      <h2>Experience</h2>
      <ul>
        <li>Job 1: Description of job 1</li>
        <li>Job 2: Description of job 2</li>
        <li>Job 3: Description of job 3</li>
      </ul>
      <h2>Education</h2>
      <ul>
        <li>School 1: Description of school 1</li>
        <li>School 2: Description of school 2</li>
        <li>School 3: Description of school 3</li>
      </ul>
      <h2>Skills</h2>
      <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
      </ul>
    </StyledResume>
  );
}

export default Resume;
