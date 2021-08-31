import styled from "styled-components/macro";

export const HeaderItem = styled.div``;

export const DropdownDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in;
  user-select: none;
`;

export const DropdownOpen = styled.span`
`;

export const DropdownItem = styled.p`
  color: white;
  display: block;
  margin: 10px 0px;
  padding: 7px;
  user-select: none;
`;

export const ProfileDiv = DropdownDiv;

export const DropdownMenu = styled.div`
  display: flex;
  position: fixed;
  right: 55px;
  height: auto;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  padding: 10px 10px;
  margin: 52px 0px;
  font-size: 14px;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  border: solid 1px rgba(255, 255, 255, 0.15);
  user-select: none;
  /* border-radius: 3px; */

  div > a {
    color: white;
  }

  @media (max-width: 740px) {
    /* transform: translateX(-97.5%); */
    margin: 25px 0px;
    right: 1px;
  }
`;

export const ArrowDiv = styled.div`
  padding-left: 10px;
  padding-bottom: 5px;
`;

export const Arrow = styled.img`
transform: ${props => props.dropdownIsOpen ? "rotate(180deg)" : "rotate(0deg)"};
transition: all ease 0.5s;
height: 6px;
`

export const DropdownChildrenDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  @media (max-width: 740px) {
    h2.HeaderName,
    div.ArrowDiv {
      display: none;
    }

    div.HeaderUser {
      height: 51px;
      margin: -46px;
    }
  }
`;