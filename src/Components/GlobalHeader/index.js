import React, { useEffect, useState, useCallback } from "react";
import * as S from "./styles/header";
import Logo from "../../Assets/UolFlix.svg";
import Dropdown from "../Dropdown";
import api from "../../Services/api";
import NotificationIcon from "../../Assets/notification.svg";
import { Link } from "react-router-dom";
import NotificationDropdown from "../Notifications";
import BrowseDropdown from "../BrowseDropdown";

export default function GlobalHeader(update) {
  const [username, setUserName] = useState("");
  const [blackHeader, setBlackHeader] = useState(false);
  const [avatar, setAvatar] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
  );

  let cat = window.location.href.split("/")[3];
  cat = cat.split("#")[0];

  const getImage = useCallback(data => {
    const base64 = btoa(
      new Uint8Array(data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        "",
      ),
    );
    return `data:;base64,${base64}`;
  }, []);

  const getUser = useCallback(() => {
    let apiGetReturned = api.get("/users/info");
    apiGetReturned
      .then(value => {
        let loggedUser = value.data;
        loggedUser.videos.forEach(value => {
          value.youtubeVideoId = value.youtube_video_id;
          value.thumbnailUrl = value.thumbnail_url;
          delete value.youtube_video_id;
          delete value.thumbnail_url;
        });

        sessionStorage.setItem("user", JSON.stringify(loggedUser));
        setUserName(loggedUser.username);

        api
          .get(`/files/${loggedUser.avatar}`, { responseType: "arraybuffer" })
          .then(res => {
            setAvatar(getImage(res.data));
          });
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  //funçao para alterar a transparencia do header
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getUser();
    }
  }, [update]);

  return (
    <div>
      <S.Header cat={cat} black={blackHeader}>
        <S.NavDiv>
          <S.HeaderLogo cat={cat}>
            <S.HeaderLink href="/browse">
              <S.LogoImg cat={cat} src={Logo} alt="UolFlix"></S.LogoImg>
            </S.HeaderLink>
          </S.HeaderLogo>
          <BrowseDropdown>
            <S.BrowseSpan cat={cat}>Navegar</S.BrowseSpan>
          </BrowseDropdown>
          <S.HeaderSpan cat={cat}>
            <Link style={{ fontWeight: "bold", color: "white" }} to="/browse">
              Início
            </Link>
          </S.HeaderSpan>
          <S.HeaderSpan cat={cat}>Séries</S.HeaderSpan>
          <S.HeaderSpan cat={cat}>Filmes</S.HeaderSpan>
          <S.HeaderSpan cat={cat}>Bombando</S.HeaderSpan>
          <S.HeaderSpan cat={cat}>Minha lista</S.HeaderSpan>
        </S.NavDiv>
        <S.ProfileSection>
          <S.Notification>
            <NotificationDropdown>
              <S.NotificationIcons
                src={NotificationIcon}
                cat={cat}
              ></S.NotificationIcons>
            </NotificationDropdown>
          </S.Notification>
          <Dropdown>
            <S.HeaderUser className="HeaderUser">
              <img
                style={{ height: "100%", borderRadius: "3px" }}
                src={avatar}
                alt="Usuário"
              ></img>
            </S.HeaderUser>
            <S.HeaderName className="HeaderName">
              {username && username}
            </S.HeaderName>
          </Dropdown>
        </S.ProfileSection>
      </S.Header>
    </div>
  );
}
