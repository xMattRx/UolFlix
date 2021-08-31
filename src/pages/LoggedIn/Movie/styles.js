import { createGlobalStyle } from "styled-components";
import styled from "styled-components/macro";

export const Center = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 50px;
width: 100%;
overflow-y: hidden;
`;
export const Iframe = styled.iframe`
  margin-top: 30px;
  width: 60vw;
  height: 60vh;
  
  @media (max-width: 749px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
font-size: 25px;
`;

export const Information = styled.p`
width: 60vw;
margin-top: 20px;
margin-bottom: 20px;
font-size:20px;
text-align: justify;
@media (max-width: 749px) {
    width: 90%;
  }
`;

export const MovieListingStyle = createGlobalStyle`
@font-face {
  font-family: "Roboto";
  src: url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap)
  format("woff2");
}

body {
  background-color: #111;
  color: #fff;
  margin: 0;
  margin-top: 70px;
  font-family: "Roboto", sans-serif;
  
}

@media (max-width: 749px) {
  body {
    margin-top: 34px;
  }
}
`;


