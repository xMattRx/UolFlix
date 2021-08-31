import styled from 'styled-components/macro';

export const DropdownDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  transition: all .3s ease-in;
  user-select: none;

  @media (min-width: 885px) {
    display: none;
  }
`;

export const DropdownItem = styled.span`
color: white;
display: flex;
align-items: center;
justify-content: center;
/* margin: 10px 0px; */
font-weight: 700;
position: relative;
width: 260px;
height: 50px;
background-color: transparent;
user-select: none;

@media (min-width: 885px) {
    display: none;
  }
`

export const ProfileDiv = DropdownDiv;

export const DropdownMenu = styled.div`
  display: flex;
  position: absolute;
  /* left: 50px; */
  width: 260px;
  height: auto;
  justify-content: left;
  flex-direction: column;
  text-align: center;
  padding: 10px 10px;
  margin: -11px 0px;
  margin-left: -90px;
  left: 100px;
  background-color: rgba(0,0,0,0.9);
  color: #fff;
  border: solid 1px rgba(255,255,255,.15);
  border-top: solid 2px white;
  font-size: 14px;
  font-weight: bold;
  user-select: none;
  // border-radius: 5px;

  div > a {
    color: white;
  }

  @media (min-width: 885px) {
    display: none;
  }

  @media (min-width: 740px) {
    /* transform: translateX(-97.5%); */
    /* margin: 26px 0px; */
    left: 167px;
  }

  @media (max-width: 950px) {
    top: 64px;
  }
`;