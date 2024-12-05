import React from 'react';
import styled from 'styled-components';

const StyledResume = styled.div`
  margin: 2rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2.5rem;
    font-family: 'Verdana, Geneva, Tahoma, sans-serif';
    text-align: center;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #555;
    line-height: 1.6;
  }
`;

function Resume() {
  return (
    <StyledResume>
      <h1>Resume</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
      </p>
    </StyledResume>
  );
}

export default Resume;
