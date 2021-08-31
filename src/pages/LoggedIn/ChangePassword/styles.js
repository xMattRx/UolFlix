import styled from "styled-components/macro";
import { Form as Unform } from "@unform/web";
import Input from "../../../Components/Input";
import { createGlobalStyle } from "styled-components";

export const BackgroundStyle = createGlobalStyle`
  html, body{
    background: #111;
    overflow: hidden;
  }
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: ${props =>
    props.cat == "ConfirmEmail" ||
      props.cat == "ConfirmToken" ||
      props.cat == "ChangePassword"
      ? "330px"
      : "660px"};
  
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  margin-top: 50px;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;

  @media (max-width: 740px) {
    min-width: 100%;
    min-height: 100%;
    margin: 0;
    margin-top: 50px;
    padding: 30px 26px 30px 26px;
    /* background-color: black; */
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Submit = styled.button`
  width: 100%;
  background-color:rgb(0, 115, 230);
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 14px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;

export const StyledInput = styled(Input)`
  color: black;
  background: #333;
  color: #E0E0E0;
  border: 0;
  outline: 0;
`;
