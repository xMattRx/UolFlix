import styled from "styled-components/macro";
import bg from "../../../Assets/fundo.png";

export const Background = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  @media (max-width: 740px) {
    background-image: ${props =>
      props.cat === "Login" ||
      props.cat === "Register" ||
      props.cat === "ConfirmEmail" ||
      props.cat === "ConfirmToken" ||
      props.cat === "ForgotPassword"
        ? "url()"
        : `url(${bg})`};
  }
`;
