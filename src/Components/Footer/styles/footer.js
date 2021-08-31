import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: ${props => (props.cat === "Profile" ? "35px 56px" : "70px 56px")};
  margin: auto;
  max-width: ${props => (props.cat === "Profile" ? "90%" : "1000px")};
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 50px;
  }

  @media (max-width: 740px) {
    background-color: black;
    padding: 70px 56px;
    border-top: 2px solid #333;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #757575;
  margin-bottom: 40px;
  padding-top: 20px;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;

export const Wrapper = styled.div`
  margin: 0;
  background-color: ${props => (props.cat === "browse" || props.cat === "Profile" ? "transparent" : "rgba(0, 0, 0, 0.75)")};
`;
