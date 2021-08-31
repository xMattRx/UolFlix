import React, { useState, useRef, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styles";

export default function BrowseDropdown(props) {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  let history = useHistory();

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  });

  return (
    <>
      <S.DropdownDiv>
        <span
          onClick={() => setOpen(!open)}
        >
          {props.children}
        </span>
        {open && (
          <S.DropdownMenu
            className="dropdown"
            style={{ height: menuHeight }}
            ref={dropdownRef}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <div className="menu">
              <S.DropdownItem>Início</S.DropdownItem>

              <S.DropdownItem>Séries</S.DropdownItem>

              <S.DropdownItem>Filmes</S.DropdownItem>

              <S.DropdownItem>Bombando</S.DropdownItem>

              <S.DropdownItem>Minha Lista</S.DropdownItem>
            </div>
          </S.DropdownMenu>
        )}
      </S.DropdownDiv>
    </>
  );
}
