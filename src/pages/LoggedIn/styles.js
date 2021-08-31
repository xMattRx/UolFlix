import styled from "styled-components/macro";
import checkmark from "../../Assets/checkmark2.svg";
import { Form as Unform } from "@unform/web";
import Input from "../../Components/Input";
import FileDropzone from "../../Components/FileDropzone"
import { createGlobalStyle } from "styled-components";
import { ProfileInputComponent } from "./Profile";
import ReactInputMask from "react-input-mask";

export const BackgroundStyle = createGlobalStyle`
  html, body{
    background: #f3f3f3;
    box-sizing: border-box;
  }
`;

export const Title = styled.h1`
  color: black;
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 28px;
`;

export const ProfileTitle = styled.h1`
  grid-column-start: 2;
  grid-column-end: span 2;
  font-size: 42px;
  border-bottom: 1px solid #999999;

  @media (max-width: 900px) {
    grid-column-end: auto;
  }
`;

export const ProfileDescription = styled.h3`
  grid-column-start: 2;
  grid-row-start: 2;
  color: gray;
  font-size: 22px;
  font-weight: normal;
  margin-top: 20px;

`;

export const Information = styled.h1`
  grid-column-start: 3;
  grid-row-start: 2;
  font-size: 22px;
  margin-top: 20px;
`;

export const Form = styled(Unform)`
  grid-column-start: 3;
  grid-row-start: 2;
  margin-top: 60px;

  @media (max-width: 900px) {
    margin-top: 20px;
  }
`;

export const AddressForm = styled(Unform)`
  grid-column-start: 3;
  grid-row-start: 3;
  margin-top: 80px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  
  @media(max-width: 900px) and (min-width: 500px) {
    justify-content: flex-start;
  }

  @media(max-width: 499px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ProfileLabel = styled.label`
  display: block;
  font-size: 18px;
  padding-bottom: 5px;
  margin-top: 10px;

  @media(max-width: 900px) and (min-width: 500px) {
    padding: 0px;
    width: 50%;
  }

  @media(max-width: 499px) {
    /* width: 100%; */
    min-width: 100%;
    min-height: 100%;
  }
`;

export const ProfileInput = styled(ProfileInputComponent)`
  width: 245px;
  height: 40px;
  border: 1px solid #999999;
  border-radius: 2px;
  padding-left: 10px;
  margin-top: 5px;
  font-size: 16px;

  &:disabled {
    background: #dedede;
    cursor: not-allowed;
  }

  
  @media(max-width: 900px) and (min-width: 500px) {
    padding: 0px;
    padding-left: 10px;
    margin: 0px;
    width: 91%;
  }

  @media (max-width: 499px) {
    min-width: 91%;
    min-height: 100%;
  }
`;

export const EditPasswordButton = styled.button`
  grid-column-start: 2;
  grid-row-start: 2;
  width: 269px;
  height: 40px;
  background: linear-gradient(to bottom, #e6e6e6, #ddd);
  border-radius: 2px;
  font-size: 14px;
  font-weight: 400;
  border: 0;
  color: #333;
  cursor: pointer;
  box-shadow: 0 1px 1px rgb(0 0 0 / 25%);
  margin-top: 60px;

  &:hover {
    background: linear-gradient(to bottom, #eee, #e3e3e3);
  }

  @media (max-width: 900px) {
    grid-column-start: 3;
  }

  @media(max-width: 900px) and (min-width: 500px) {
    padding: 0px;
    /* padding-left: 10px; */
    margin: 0px;
    margin-top: 10px;
    width: 47.5%;
    /* min-height: 100px; */
  }

  @media (max-width: 499px) {
    width: 98.5%;
    min-height: 100%;
    margin: 0;
    margin-top: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  font-size: 1em;
  min-width: 300px;
  min-height: 400px;
  position: relative;
  color: #333;
  margin: 0 auto;
  padding-top: 100px;

  @media (max-width: 740px) {
    width: 95%;
    max-width: 1024px;
    font-size: 1em;
  }
`;

export const Divider = styled.div`
  border-top: 1px solid #E6E6E6;
`;


export const GridContainer = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: auto 350px 525px auto;
  grid-template-rows: 60px 400px 500px;
  width: 100%;
  height: 100%;

  @media (max-width: 740px) {
    margin-top: 70px;
  }

  @media (max-width: 900px){
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    padding: 10px;
  }
`;

//Endereço

export const AddressTitle = styled.h1`
  grid-column-start: 3;
  grid-row-start: 3;
  font-size: 22px;
  margin-top: 20px;
  border-top: 1px solid #cccccc;
  padding-top: 20px;
  margin-bottom: 20px;

  @media(max-width: 900px) {
    grid-column-start: 3;
    grid-row-start: auto;
  }
`;

export const AddressLabel = styled.label`
  display: block;
  font-size: 18px;
  padding-bottom: 5px;
  margin-top: 10px;

  @media(max-width: 900px) and (min-width: 500px) {
    padding: 0px;
    width: 50%;
  }

  @media(max-width: 499px) {
    /* width: 100%; */
    min-width: 100%;
    min-height: 100%;
  }
`;

export const AddressInput = styled(ProfileInputComponent)`
  width: 245px;
  height: 40px;
  border: 1px solid #999999;
  border-radius: 2px;
  padding-left: 10px;
  margin-top: 5px;
  font-size: 16px;
  
  @media(max-width: 900px) and (min-width: 500px) {
    padding: 0px;
    padding-left: 10px;
    margin: 0px;
    width: 91%;
  }

  @media (max-width: 499px) {
    min-width: 91%;
    min-height: 100%;
  }

  
`;

export const CompleteAddress = styled(ProfileInputComponent)`
  width: 330px;
  height: 40px;
  border: 1px solid #999999;
  border-radius: 2px;
  padding-left: 10px;
  margin-top: 5px;
  font-size: 16px;
  
  @media(max-width: 900px) and (min-width: 500px) {
    width: 245px;
    padding: 0px;
    padding-left: 10px;
    margin: 0px;
    width: 91%;
  }

  @media (max-width: 499px) {
    width: 245px;
    min-width: 91%;
    min-height: 100%;
  }
`;

export const AddressComplement = styled(ProfileInputComponent)`
  width: 160px;
  height: 40px;
  border: 1px solid #999999;
  border-radius: 2px;
  padding-left: 10px;
  margin-top: 5px;
  font-size: 16px;
  
  @media(max-width: 900px) and (min-width: 500px) {
    padding: 0px;
    padding-left: 10px;
    margin: 0px;
    width: 91%;
  }

  @media (max-width: 499px) {
    min-width: 91%;
    min-height: 100%;
  }
  
`;

//

// export const ContainerAAAAA = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 660px;
//   background-color: rgba(0, 0, 0, 0.75);
//   border-radius: 5px;
//   box-sizing: border-box;
//   width: 100%;
//   margin: auto;
//   max-width: 450px;
//   padding: 60px 68px 40px;
//   margin-bottom: 100px;

//   @media (max-width: 740px) {
//     min-width: 100%;
//     min-height: 100%;
//     margin: 0;
//     padding: 30px 26px 30px 26px;
//     background-color: black;
//   }
// `;

// export const Form = styled(Unform)`
//   /* display: flex;
//   flex-direction: column;
//   width: 100%;
//   background-color: white; */
//   display: block;
//   margin-top: 0em;
// `;

// Checkbox

export const CheckboxForm = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  justify-content: space-between;

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
  border: 1px solid #b3b3b3;
  height: 25px;
  width: 25px;
  color: #eee;
  outline: none;
  transition-duration: 0.3s;
  background-color: white;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 5px 2px rgb(150 200 255 / 60%);
    border-color: grey;
  }

  &:checked {
    background-color: white;
  }

  &:checked + label::before {
    content: url(${checkmark});
    transform: scale(0.5);
    display: block;
    text-align: center;
    position: absolute;
    left: -0.5rem;
    top: -0.6rem;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  padding: 0.25rem 0.25rem;
  font-size: 18px;
  line-height: normal;
  color: #333;
`;

export const Submit = styled.button`
  width: 260px;
  height: 50px;
  background: #0073e6;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 400;
  border: 0;
  color: white;
  cursor: pointer;
  box-shadow: 0 1px 1px rgb(0 0 0 / 25%);
  margin-top: 20px;

  &:hover {
    background: #2190ff;
  }

  @media (max-width: 900px) and (min-width: 500px) {
    width: 24%;
  }

  @media (max-width: 499px) {
    width: 94%;
  }
`;

export const Cancel = styled.button`
  width: 260px;
  height: 50px;
  background: #ccc;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 400;
  border: 0;
  color: #333;
  cursor: pointer;
  box-shadow: 0 1px 1px rgb(0 0 0 / 25%);
  margin-top: 20px;

  &:hover {
    background: linear-gradient(to bottom, #e6e6e6, #ddd);
  }

  @media (max-width: 900px) and (min-width: 500px) {
    width: 24%;
  }

  @media (max-width: 499px) {
    width: 94%;
  }
`;

export const PasswordInput = styled.input`
  width: 500px;
  height: 48px;
  padding: 0 10px 0 10px;
  font-size: 16px;
  border: 1px solid #8c8c8c;
  border-radius: 2px;
  margin-bottom: 40px;
  background-color: white;

  &:focus {
    outline: none;
  }
`;

export const StyledInput = styled(Input)`
  background-color: white;
  border: 1px solid #8c8c8c;
`;

export const Dropzone = styled(FileDropzone)`
  background-color: white;
  border: 1px solid #8c8c8c;
`

export const InputField = styled(ReactInputMask)`
  border: ${props =>
    props.errorborder ? "1px solid red" : "1px solid #999999"};
`;

export const ErrorSpan = styled.span`
  margin: 0 !important;
  color: red;
  font-size: 13px;
`;

export const ErrorDiv = styled.div`
  margin: 6px 0;
`;

export const ServiceCode = styled.button`
  font-size: 12px;
  background: 0 0;
  width: 12%;
  color: grey;
  border: solid 1px grey;
  padding: 0.5rem;

  &:hover {
    color: #aaaaaa;
    cursor: pointer;
  }

  @media (max-width: 640px) {
    width: 58px;
  }
`;

export const HorizontalContainer = styled.div`
  grid-column-start: 2;
  grid-row-start: 2;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`