import styled from "styled-components/macro";
import { Form as Unform } from "@unform/web";
import Input from "../../../Components/Input";
import { createGlobalStyle } from "styled-components";

export const BackgroundStyle = createGlobalStyle`
  html, body{
    background: #111;
  }
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Information = styled.div`
  display: flex;
  color: #E0E0E0;
  flex-direction: column;
  justify-content: center;
  margin: 0px 30px;
`;

export const Observation = styled.p`
  margin-top: 20px;
  color: #aaa;
`;

export const Synopsis = styled.p`
  text-align: justify;
  margin-top: 20px;
  font-weight: 100;
  line-height: 20px;
  color: #ddd;
`;

export const InputDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;

export const Section = styled.section`
  margin-bottom: 3px;
  border-bottom: 1px solid #333;
`;
export const Add = styled.p`
  color: #E0E0E0;
  cursor: pointer;
  font-weight: bold;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  color: #E0E0E0;
  margin: 20px 0px;
`;

export const ContentVideo = styled.div`
  display: flex;
  margin: 20px 0px;
  justify-content: left;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  border-radius: 5px;
  box-sizing: border-box;
  margin: 0;
  margin-top: 20px;
  padding: 60px 208px 40px;
  margin-bottom: 100px;
  /* right: 100px; */

  @media (max-width: 740px) {
    min-width: 100%;
    min-height: 100%;
    margin: 0;
    margin-top: 50px;
    padding: 30px 26px 30px 26px;
    /* background-color: black; */
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 740px) {
    flex-direction: column;
    /* background-color: black; */
  }
`;

export const Title = styled.h1`
  display: flex;
  color: #E0E0E0;
  font-size: 32px;
  font-weight: bold;
`;

export const Trash = styled.img`
  width: 20px;
  cursor: pointer;
`;
export const Pencil = styled.img`
  cursor: pointer;
  width: 20px;
  margin-left: 10px;
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
`;

export const Submit = styled.button`
  width: 100%;
  padding: 14px;
  color: #E0E0E0;
  cursor: pointer;
  height: 50px;
  background: #0073e6;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 400;
  border: 0;
  color: #E0E0E0;
  cursor: pointer;
  box-shadow: 0 1px 1px rgb(0 0 0 / 25%);
  margin-top: 20px;
  margin-bottom: 2px;

  &:hover {
    background: #2190ff;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const Update = styled.button`
  width: 100%;
  margin: 0px 0 12px;
  padding: 14px;
  color: #E0E0E0;
  cursor: pointer;
  height: 50px;
  background: #00eb53;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 400;
  border: 0;
  color: #E0E0E0;
  cursor: pointer;
  box-shadow: 0 1px 1px rgb(0 0 0 / 25%);
  /* margin-top: 20px; */
  margin-bottom: 2px;

  &:hover {
    background: #2190ff;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const Delete = styled.button`
  width: 100%;
  margin: 0px 0 12px;
  padding: 14px;
  color: #E0E0E0;
  cursor: pointer;
  height: 50px;
  background: #e60000;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 400;
  border: 0;
  color: #E0E0E0;
  cursor: pointer;
  box-shadow: 0 1px 1px rgb(0 0 0 / 25%);
  /* margin-top: 20px; */
  margin-bottom: 2px;

  &:hover {
    background: #2190ff;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  background: #737373;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: -10px 0 12px;
  padding: 14px;
  border: 0;
  color: #E0E0E0;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;

export const StyledInput = styled(Input)`
  color: black;
  background: #f3f3f3;
  border: 1px solid;
  &:disabled {
    background: #dedede;
    cursor: not-allowed;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  word-wrap: break-word;
  table-layout: fixed;
  overflow: hidden;
  font-size: 0.8em;
  /* border-collapse: collapse; */
`;

export const TableBody = styled.tbody`
  /* display: flex; */
  overflow: auto;
  height: 100px;
  width: 100%;
`;

export const TableHeader = styled.thead`
  background: #737373;
  color: #fff;
  width: 100%;
`;

export const TableHeadCell = styled.th`
  padding: 5px;
  text-align: left;
  padding: 10px;
  border: black solid 1px;
  /* width: 100%; */
`;

export const TableCell = styled.td`
  padding: 5px;
  text-align: left;
  /* width: 200px; */
`;

export const TableRow = styled.tr`
  /* background: red; */
  /* display: flex; */
`;
