import React, { useState, useRef, useEffect, useCallback } from "react";
import * as S from "./styles/notifications";
import { Link } from "react-router-dom";
import n1 from "../../Assets/notification1.png";
import n2 from "../../Assets/notification2.jpg";
import n3 from "../../Assets/notification3.jpg";
import n4 from "../../Assets/notification4.jpg";
import Arrow from "../../Assets/Arrow.svg";

export default function NotificationDropdown(props) {
  const [open, setOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  return (
    <>
      <S.DropdownDiv>
        <span onClick={() => setOpen(!open)}>{props.children}</span>
        {open && (
          <>
            <S.Arrow src={Arrow}></S.Arrow>
            <S.DropdownMenu
              className="dropdown"
              style={{ height: menuHeight }}
              ref={dropdownRef}
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <div className="menu">
                <S.DropdownItem>
                  <S.ImageTextNotification>
                    <S.ElementImage>
                      <S.NotificationImage src={n1} />
                    </S.ElementImage>
                    <S.ElementText>
                      <S.HeaderNotification>
                        UolFlix - O que vai rolar
                      </S.HeaderNotification>
                      <S.BodyNotification>
                        Veja os últimos lançamentos.
                      </S.BodyNotification>
                      <S.TimeNotification>
                        <span>há 1 dia</span>
                      </S.TimeNotification>
                    </S.ElementText>
                  </S.ImageTextNotification>
                </S.DropdownItem>
                <S.DropdownItem>
                  <S.ImageTextNotification>
                    <S.ElementImage>
                      <S.NotificationImage src={n2} />
                    </S.ElementImage>
                    <S.ElementText>
                      <S.HeaderNotification>Novidade</S.HeaderNotification>
                      <S.BodyNotification>
                        Rua do Medo: 1994 - Parte 1
                      </S.BodyNotification>
                      <S.TimeNotification>
                        <span>há 4 dias</span>
                      </S.TimeNotification>
                    </S.ElementText>
                  </S.ImageTextNotification>
                </S.DropdownItem>
                <S.DropdownItem>
                  <S.ImageTextNotification>
                    <S.ElementImage>
                      <S.NotificationImage src={n3} />
                    </S.ElementImage>
                    <S.ElementText>
                      <S.HeaderNotification>Novidade</S.HeaderNotification>
                      <S.BodyNotification>
                        RESIDENT EVIL: No Escuro Absoluto
                      </S.BodyNotification>
                      <S.TimeNotification>
                        <span>há 1 semanas</span>
                      </S.TimeNotification>
                    </S.ElementText>
                  </S.ImageTextNotification>
                </S.DropdownItem>
                <S.DropdownItem>
                  <S.ImageTextNotification>
                    <S.ElementImage>
                      <S.NotificationImage src={n4} />
                    </S.ElementImage>
                    <S.ElementText>
                      <S.HeaderNotification>Assista agora</S.HeaderNotification>
                      <S.BodyNotification>
                        Trailer da Temporada 13 já está disponível.
                      </S.BodyNotification>
                      <S.TimeNotification>
                        <span>há 2 semanas</span>
                      </S.TimeNotification>
                    </S.ElementText>
                  </S.ImageTextNotification>
                </S.DropdownItem>
              </div>
            </S.DropdownMenu>
          </>
        )}
      </S.DropdownDiv>
    </>
  );
}
