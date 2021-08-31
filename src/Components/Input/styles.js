import styled from "styled-components/macro";
import checkmark from "../../Assets/checkmark.svg";
import { Form as Unform } from "@unform/web";
import { Link } from "react-router-dom";

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputField = styled.input`
  box-sizing: content-box;
  width: auto;
  background: #333;
  border-radius: 4px;
  border: 0;
  outline: 0;
  
  color: white;
  line-height: 40px;
  padding: 5px 20px;
  font-size: 16px;
  border-bottom: ${props => (props.errorBorder ? "solid 3px #e87c03" : "none")};
  &:last-of-type {
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  bottom: 16rem;
`;

export const InputDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;

export const Eye = styled.i`
  color: #737373;
  position: relative;
  bottom: ${props => (props.error === false ? "45px" : "63px")};
  margin-bottom: -15px;
  display:${props => (props.showEye === false ? "none" : "show")};
  left: 89%;
  transition-duration: 0.3s;
  &:hover {
    color: #e50914;
    cursor: pointer;
  }
`;

export const PasswordDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
`;

export const ErrorDiv = styled.div`
  margin: 6px;
`;

export const ErrorSpan = styled.span`
  margin: 0 !important;
  color: #e87c03;
  font-size: 13px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${props =>
    props.cat == "ConfirmEmail" ||
      props.cat == "ConfirmToken" ||
      props.cat == "ChangePassword"
      ? "330px"
      : "660px"};
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: ${props =>
    props.cat == "ConfirmEmail" ||
      props.cat == "ConfirmToken" ||
      props.cat == "ChangePassword"
      ? "60px 68px"
      : "60px 68px 40px"};
  margin-bottom: ${props =>
    props.cat == "ConfirmEmail" ||
      props.cat == "ConfirmToken" ||
      props.cat == "ChangePassword"
      ? "200px"
      : "100px"};

  @media (max-width: 740px) {
    min-width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 30px 26px 30px 26px;
    background-color: black;
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
  background: #e50914;
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

export const CheckboxForm = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  padding-bottom: ${props => (props.cat == "Register" ? "0" : "4rem")};

  @media (max-width: 440px) {
    padding-bottom: 2rem;
  }
`;

export const CheckboxDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  display: inline-flex;
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: 0;
  height: 16px;
  width: 16px;
  border-radius: 2px;
  outline: none;
  transition-duration: 0.3s;
  background-color: #737373;
  cursor: pointer;

  &:checked {
    background-color: #595959;
  }

  &:checked + label::before {
    content: url(${checkmark});
    transform: scale(0.5);
    display: block;
    text-align: center;
    color: black;
    position: absolute;
    left: 0.03rem;
    top: 0rem;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  padding: 0.25rem 0.25rem;
  font-size: 13px;
  line-height: normal;
  color: #b3b3b3;
`;

export const Help = styled(Link)`
  font-size: 13px;
  line-height: normal;
  color: #b3b3b3;
  text-decoration: none;
  align-items: flex-end;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Facebook = styled.a`
  display: flex;
  font-size: 13px;
  color: #737373;
  align-items: center;
  cursor: pointer;
`;

export const FacebookImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
  margin-top: ${props => (props.cat === "Register" ? "16px" : "16px")};
`;

export const SignUp = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const DescriptionLink = styled.a`
  color: #0071eb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const SmallText = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const SmallDescription = styled.p`
  margin-top: ${props => (props.cat == "Register" ? "10px" : "15px")};
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const Info = styled.a`
  color: #0071eb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
