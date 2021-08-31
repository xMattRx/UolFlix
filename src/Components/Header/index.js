import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, Img, Enter } from "./styles/header";
import Logo from "../../Assets/UolFlix.svg";

export default function Header() {
  let cat = window.location.href.split("/")[3];

  return (
    <HeaderContainer cat={cat}>
      <Link to="/">
        <Img src={Logo} alt="Logo" />
      </Link>
      <div>
        <Link to="/Login">{cat === "" && <Enter>Entrar</Enter>}</Link>
      </div>
    </HeaderContainer>
  );
}
