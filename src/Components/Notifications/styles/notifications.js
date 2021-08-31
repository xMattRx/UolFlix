import styled from "styled-components/macro";

export const HeaderItem = styled.div``;

export const DropdownDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in;
`;

export const DropdownItem = styled.span`
  color: white;
  display: block;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
`;

export const ImageTextNotification = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  line-height: 1.2;
`;

export const ElementImage = styled.a`
  position: relative;
  padding: 16px 0 16px 16px;
  -webkit-box-flex: 1;
  flex: auto;
`;

export const ElementText = styled.a`
  padding: 16px;
  -webkit-box-flex: 1;
  flex: auto;
`;

export const HeaderNotification = styled.div`
  font-size: 18px;
  font-weight: 200;
`;

export const BodyNotification = styled.div`
  font-size: 18px;
  font-weight: 200;
`;

export const TimeNotification = styled.div`
  font-size: 12px;
  font-weight: lighter;
  line-height: 1.3;
  color: grey;
  margin-top: 3px;
`;

export const NotificationImage = styled.img`
  width: 112px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
`;

export const ProfileDiv = DropdownDiv;

export const Arrow = styled.img`
  position: absolute;
  width: 20px;
  transform: rotate(180deg);
  top: 43px;
  left: 25px;
`;

export const DropdownMenu = styled.div`
  display: block;
  max-height: 80vh;
  max-height: -webkit-calc(100vh - 280px);
  max-height: -moz-calc(100vh - 280px);
  max-height: calc(100vh - 280px);
  min-height: 200px;
  overflow: auto;
  padding: 0;
  list-style: none;
  width: 408px;
  position: fixed;
  right: 30px;
  justify-content: left;
  flex-direction: column;
  text-align: left;
  margin: 50px 150px 50px 0;
  background-color: rgba(0, 0, 0, 0.85);
  border: 1px solid #999;
  border-top: 2px solid white;
  font-size: 14px;
  font-weight: bold;
  // border-radius: 5px;

  div > a {
    color: white;
  }


  @media (max-width: 768px) {
    right: -3px;
  }

  @media (max-width: 740px) {
    /* transform: translateX(-97.5%); */
    right: 30px;
    margin: 26px 0px;
    margin-top: 50px;
    /* width: 89%; */
  }
  @media (max-width: 445px) {
    width: 88%;
  }
`;
