import styled from "styled-components/macro";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { Form as Unform } from "@unform/web";
import Input from "../../../Components/Input";

export const BackgroundStyle = createGlobalStyle`
  html, body{
    background: #111111;
  }
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Linke = styled(Link)`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  color: #E0E0E0;
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 749px) {
    flex-direction: column;
    /* background-color: black; */
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 0;
  margin-top: 20px;
  padding: 60px 20% 10px;
  /* right: 100px; */

  @media (max-width: 749px) {
    min-width: 100%;
    min-height: 100%;
    margin: 0;
    margin-top: 50px;
    padding: 30px 26px 0 26px;
    /* background-color: black; */
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  color: #E0E0E0;
  margin: 20px 0px;
`;

export const MovieContent = styled.div`
  display: flex;
  width: 100%;
  color: #E0E0E0;
  margin: 20px 0;
`;

export const SmallerMovieContent = styled.div`
  display: flex;
  width: auto;
  color: #E0E0E0;
  margin: 20px 0;
  flex-direction: row;
  flex-wrap: nowrap;
`

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  padding-bottom: 3px;
  border-bottom: 1px solid #333;
  width: 100%;
  color: #E0E0E0;
  margin: 20px 0;

  @media (max-width: 749px) {
    flex-direction: column;
  }
`;

export const InfoSection = styled.section`
  margin-bottom: 3px;
`;

export const Delete = styled.p`
  color: #e51d1d;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
`;

export const DeleteDiv = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Trash = styled.img`
  width: 26px;
  cursor: pointer;
  margin-right: 10px;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  padding: 0 20% 10px;
  box-sizing: border-box;

  @media (max-width: 749px) {
    min-width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0 26px 0 26px;
    /* background-color: black; */
  }
`;

export const MovieId = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const SmallerInputDiv = styled.div`
  display: flex;
  width: calc((100% / 3) - (1%));
  flex-direction: column;
  justify-content: space-between;
`;

export const InputLabel = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
`;
export const SelectField = styled.select`
  background: #333;
  border-radius: 4px;
  border: 0; 
  outline: 0;
  color: #E0E0E0;
  padding: 5px 20px;
  font-size: 16px;
  margin-bottom: 20px;
  height: 40px;

  &:hover{
   
  }
`

export const InputField = styled.input`
  box-sizing: content-box;
  width: auto;
  background: #333;
  border-radius: 4px;
  border: 0;
  outline: 0;
  color: #E0E0E0;
  line-height: 40px;
  padding: 5px 20px;
  font-size: 16px;
  margin-bottom: 20px;

  &:disabled {
    color: gray;
    background: #292929;
    cursor: not-allowed;
  }
`;

export const Separator = styled.div`
  margin: 5px;
`;

export const Sinopsis = styled.textarea`
  box-sizing: content-box;
  width: auto;
  resize: vertical;
  height: 100px;
  background: #333;
  border-radius: 4px;
  border: 0;
  outline: 0;
  color: #E0E0E0;
  line-height: 30px;
  padding: 10px 20px;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const ThumbnailWrapper = styled.div`
  width: 800px;
  min-height: 20%;
  overflow: hidden;
  margin-right: 20px;

  @media (max-width: 749px) {
    min-height: 100%;
  }
`;

export const MovieThumbnail = styled.img`
  object-fit: cover !important;
  width: 100%;
  height: 275px;
  border-radius: 5px;
  
`;

export const Divider = styled.div`
  border-top: 1px solid #333;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Save = styled.button`
  width: 250px;
  height: 60px;
  background: #0073e6;
  border-radius: 2px;
  font-size: 20px;
  font-weight: 400;
  border: 0;
  color: #E0E0E0;
  cursor: pointer;
  box-shadow: 0 1px 1px rgb(0 0 0 / 25%);
  margin-top: 20px;
  display: ${props => (props.cat === undefined ? "inline-block" : "none")};
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Update = styled.button`
  width: 250px;
  height: 60px;
  background: #0073e6;
  /* background: gray; */
  border-radius: 2px;
  font-size: 20px;
  font-weight: 400;
  border: 0;
  color: #E0E0E0;
  cursor: pointer;
  box-shadow: 0 1px 1px rgb(0 0 0 / 25%);
  margin-top: 20px;
  display: ${props => (props.cat === undefined ? "none" : "inline-block")};
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Cancel = styled.button`
  width: 250px;
  height: 60px;
  background: #303030;
  /* background: gray; */
  border-radius: 2px;
  font-size: 20px;
  font-weight: 400;
  border: 0;
  color: #E0E0E0;
  cursor: pointer;
  box-shadow: 0 1px 1px rgb(0 0 0 / 25%);
  margin-top: 20px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;
