import styled from "styled-components/macro";
import downloadicon from "../../../Assets/download-icon.gif";

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Inner = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  flex-direction: ${({ direction }) => direction};
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 20px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  padding-bottom: 10px;
  font-size: 48px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border: 0;
`;

export const CardContainer = styled.div`
  min-height: 100px;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 8%;
  transform: translateX(-50%);
  margin: 0 auto;
  padding: 0.5em 0.75em;
  width: 60%;
  max-width: 20em;
  min-width: 15em;
  background: black;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 0.75em;
  box-shadow: 0 0 2em 0 #000;

  :after {
    display: block;
    content: "";
    background: url(${downloadicon}) center center no-repeat;
    background-size: 100%;
    width: 3em;
    height: 3em;
    display: block;
  }
`;

export const DivImage = styled.div`
  display: flex;
`;

export const CardImage = styled.img`
  width: 45px;
  height: 68px;
  margin: 0 1em 0 0;
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0.3em 0;
`;

export const CardTitle = styled.div`
  color: white;
  font-size: 1em;
  font-weight: 600;
  text-align: start;
  padding-bottom: 0.2em;
`;

export const CardSubTitle = styled.div`
  color: #0071eb;
  font-size: 0.9em;
  font-weight: normal;
  text-align: start;
`;
