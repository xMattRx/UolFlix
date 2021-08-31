import styled from "styled-components/macro";

export const Header = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  background-color: ${props => (props.black === false && props.cat === "browse" ? "transparent" : "#111")};
  background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
  transition: all ease 0.5s;

  @media (max-width: 768px) {
    padding: 0 30px;

  }

  @media (max-width: 740px) {
    height: 51px;
    padding: 0px 5px;
  }
`;

export const LogoImg = styled.img`
  height: ${props => (props.cat == "browse" ? "2.5rem" : "2rem")};

  @media (max-width: 740px) {
    height: 2rem;
  }
  
`;

export const HeaderLogo = styled.div`
  height: 35px;
  @media (max-width: 740px) {
    height: 30px;
    padding-left: 10px;
  }
`;

export const HeaderLink = styled.a`
  margin-right: 25px;
`;

export const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderSpan = styled.span`
  visibility: ${props => (props.cat == "Profile" || props.cat == "MyMovies" || props.cat == "MovieReg" || props.cat == "MovieRegister" || props.cat == "ChangePassword"  ? "hidden" : "visible")};
  font-size: 16px;
  margin-left: 20px;
  cursor: pointer;
  transition: color .4s;
  user-select: none;

  &:hover {
    color: lightgray;
  }

  @media (max-width: 885px) {
    display: none;
  }
`;

export const BrowseSpan = styled.span`
visibility: ${props => (props.cat == "Profile" || props.cat == "MyMovies" || props.cat == "MovieReg" || props.cat == "MovieRegister" || props.cat == "ChangePassword"  ? "hidden" : "visible")};
font-size: 16px;
/* margin-left: 15px; */
cursor: pointer;
transition: color .4s;
user-select: none;

&:hover {
  color: lightgray;
}

@media (min-width: 885px) {
  display: none;
}
`;

export const ProfileSpan = styled.span`
  visibility: ${props => (props.cat == "Profile" || props.cat == "MyMovies" || props.cat == "MovieReg" || props.cat == "MovieReg" || props.cat == "MovieRegister" || props.cat == "ChangePassword"  ? "hidden" : "visible")};
  font-size: 16px;
  margin-left: 20px;
  cursor: pointer;
  transition: color .4s;
  user-select: none;

  &:hover {
    color: lightgray;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
`;

export const NotificationIcons = styled.img`
  visibility: ${props => (props.cat == "Profile" || props.cat == "MovieReg" || props.cat == "MyMovies" || props.cat == "MovieRegister" || props.cat == "ChangePassword" ? "hidden" : "visible")};
  margin: 0 20px 0 10px;
  cursor: pointer;
  position: absolute;
  transition: .5s ease transform;

  &:hover {
    transform: scale(1.2);
  }
`;

export const SearchIcons = styled.img`
  top: 50%;
  transform: translateY(-44%);
  right: -13px; 
  position: absolute;
  cursor: pointer;
  z-index: 2;
  transition: .5s ease transform;
  visibility: ${props => (props.cat == "Profile" || props.cat == "MyMovies" || props.cat == "MovieReg" || props.cat == "MovieRegister" || props.cat == "ChangePassword"  ? "hidden" : "visible")};
  margin: 0 15px;

  &:hover {
    transform: scale(1.2) translateY(-40%);
  }
`;

export const Search = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 740px) {
    right: 40px;
  }

  @media (max-width: 400px) {
    display: none;
  }

`;


export const SearchInput = styled.input`
  width: 0px;
  position: absolute;
  
  height: 34px;
  right: 0;
  background-color: transparent;
  box-shadow: none;
  color: #fff;
  border: 1px solid transparent;
  outline: none;
  padding-left: 35px;
  margin-left: 5px;
  font-size: 16px;
  transition: 0.3s ease all;
  z-index: -9999;
  ${(props => props.showSearch && `z-index: 9999; width: 240px; border-color: #fff; background-color: rgb(20, 20, 20);`)}
  `;


export const Notification = styled.span`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 45px;
  user-select: none;

  @media (max-width: 740px) {
    right: 40px;
  }
`;

export const HeaderUser = styled.div`
  height: 35px;
  padding-right: 10px;
`;

export const HeaderName = styled.h2`
  color: white;
  font-weight: 600;
`;