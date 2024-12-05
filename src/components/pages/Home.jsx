import React from "react";
import styled from "styled-components";

const StyledHome = styled.div`
  h1 {
    cursor: none;
    text-align: center;
    font-size: 2.5rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: calc(500 / 2);
    -webkit-text-fill-color: #30b4b9c6;
  }
  h1:hover {
    -webkit-text-fill-color: #45f88d;
  }
  body {
    margin: 0px;
    padding: 0px;
  }
  p {
    font-size: 1.2rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    -webkit-text-fill-color: #111;
  }
`;

function Home() {
  return (
    <StyledHome>
      <div className="container-fluid">
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          earum dolorum laboriosam numquam doloremque tenetur iure, dolorem est
          culpa officiis repudiandae accusamus nostrum omnis veniam magni eos
          consequuntur porro libero?
        </p>
      </div>
    </StyledHome>
  );
}

export default Home;
