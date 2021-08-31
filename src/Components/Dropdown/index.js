import React, { useState, useRef, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styles/dropdown";
import Arrow from "../../Assets/Arrow.svg";
import api from "../../Services/api";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

toast.configure();

export default function Dropdown(props) {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  let history = useHistory();

  const notifySuccess = message => {
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyError = message => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const logOut = useCallback(event => {
    event.preventDefault();
    const token = sessionStorage.getItem("auth_token");

    const config = {
      headers: { Authorization: "Bearer " + token },
    };

    api
      .delete("/sessions/logout", {}, config)
      .then(response => {
        sessionStorage.clear();
        history.push("/");
        notifySuccess("Volte sempre!");
      })
      .catch(e => {
        console.log("logout: ", e.message);
      });
  }, []);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  });

  return (
    <>
      <S.DropdownDiv>
        <S.DropdownOpen onClick={() => setOpen(!open)}>
          <S.DropdownChildrenDiv>
            {props.children}
            <S.ArrowDiv className="ArrowDiv">
              <S.Arrow src={Arrow} alt="dropdown" dropdownIsOpen={open} />
            </S.ArrowDiv>
          </S.DropdownChildrenDiv>
        </S.DropdownOpen>
        {open && (
          <S.DropdownMenu
            className="dropdown"
            style={{ height: menuHeight }}
            ref={dropdownRef}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <div className="menu">
              <Link to="/Profile">
                <S.DropdownItem>Editar Perfil</S.DropdownItem>
              </Link>

              <Link to="/ChangePassword">
                <S.DropdownItem>Editar Senha</S.DropdownItem>
              </Link>

              <Link to="/MyMovies">
                <S.DropdownItem>Meus Filmes</S.DropdownItem>
              </Link>

              {/* <Link to="/MovieRegister">
                <S.DropdownItem >Cadastrar um Filme</S.DropdownItem>
              </Link> */}

              <S.DropdownItem onClick={logOut}>Sair da UolFlix</S.DropdownItem>
            </div>
          </S.DropdownMenu>
        )}
      </S.DropdownDiv>
    </>
  );
}
