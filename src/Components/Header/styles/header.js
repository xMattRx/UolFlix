import styled from "styled-components/macro";

export const HeaderContainer = styled.header`
  display: flex;
  margin: 0 3%;
  justify-content: space-between;
  padding-bottom: ${props =>
    props.cat == "ConfirmEmail" ||
    props.cat == "ConfirmToken" ||
    props.cat == "ForgotPassword"
      ? "100px"
      : "0"};

  @media (max-width: 740px) {
    padding-bottom: 0;
  }
`;

export const Img = styled.img`
  margin-top: 20px;
  height: 4em;

  @media (max-width: 1024px) {
    height: 3.5em;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    height: 3em;
  }

  @media (max-width: 440px) {
    margin-top: 20px;
    height: 2em;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 8px 10px;
  font-weight: 500;
  font-size: 0.91em;
  color: white;
  cursor: pointer;
`;

export const Enter = styled(Button)`
  background-color: red;
  border: none;
  border-radius: 2px;
  padding: 8px 18px;
`;
