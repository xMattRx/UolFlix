import styled from "styled-components";

export const Img = styled.img`
  height: 50vh;
  display: block;
  margin: auto;
  @media screen and (max-width: 400px) {
    max-width: 100%;
    height: 80%;
  }
`;

export const ImgReverse = styled(Img)`
  @media screen and (max-width: 600px) {
    margin-left: 3%;
  }
`;

export const ImgPc = styled(Img)`
  height: 60vh;
`;
