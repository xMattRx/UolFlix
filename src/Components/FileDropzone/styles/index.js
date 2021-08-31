import styled from 'styled-components/macro';

export const StyledDiv = styled.div`
  display: flex;
  width: 245px;
  height: 40px;
  border: 1px solid #999999;
  border-radius: 2px;
  padding-left: 10px;
  margin-top: 5px;
  font-size: 16px;
  background: #333333;

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
`

const getColor = (props) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isDragActive) {
      return '#2196f3';
  }
  return '#bbbbbb';
}

export const Container = styled.div`
  flex: 1;
  display: flex;
  width: 245px;
  /* height: 80px; */
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 0;
  margin-top: 10px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  /* color: #bdbdbd; */
  color: black;
  outline: none;
  transition: border .24s ease-in-out;

  @media(max-width: 900px) and (min-width: 500px) {
    padding: 0px;
    /* padding-left: 10px; */
    margin: 0px;
    margin-top: 10px;
    width: 47.5%;
    min-height: 100px;
  }

  @media (max-width: 499px) {
    min-width: 91%;
    min-height: 100%;
  }
`;

export const StyledInput = styled.input`
  width: auto;
`

export const StyledParagraph = styled.p`
  text-align: left;
  width: auto;
  /* justify-content: center; */
  margin: auto 0;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 2px;
  background: #eeeeee;
  text-overflow: clip;
  line-height: 1;
  color: black;
  font-size: 14px;
`

export const StyledDivList = styled.div`
  display: flex;
  align-items: center;
  /* position: absolute; */
  margin: auto 0;
  /* right: 0; */
  background: white;
  height: 40px;
  right: 0;
  width: auto;
  font-size: 14px;
  padding: 5px;
  word-wrap: break-word;
`

export const Title = styled.h1`
  display: block;
  text-align: left;
  font-size: 18px;
  padding-bottom: 5px;
  margin-top: 10px;
`;

export const StyledButton = styled.button`
  width: 35%;
  background: #0073e6;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  margin: 0 auto;
  padding: 9px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;