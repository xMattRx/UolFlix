import React, { useState, useRef, useEffect, useCallback } from "react";
import * as S from "./styles/modal";
import Arrow from "../../Assets/play.svg";
import AddIcon from "../../Assets/add.svg";
import LikeIcon from "../../Assets/like.svg";
import DislikeIcon from "../../Assets/dislike.svg";
import CloseIcon from "../../Assets/close.svg";
import api from "../../Services/api";
import { Link } from "react-router-dom";

const Modal = ({ modalOpen, setModalOpen, movieCat }) => {
  // let cat = window.location.href.split("/")[4];
  const [data, setData] = useState({});

  const getMovie = useCallback(async () => {
    try {
      let apiGetReturned = api.get(`/videos/${movieCat}`);
      apiGetReturned.then(value => {
        console.log(value.data);
        setData(value.data);
      });
    } catch (e) {
      console.log(e);
      console.log("Erro: ", e);
      // history.push("/browse");
    }
  }, []);

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      {data && (
        <S.Modal modalOpen={modalOpen}>
          <S.Dialog>
            <S.CloseButton onClick={setModalOpen} src={CloseIcon} />
            <S.Content>
              <S.Hero>
                <S.HeroShadow></S.HeroShadow>
                <S.MovieThumbnail src={data.thumbnail_url} />
                <S.ModalButtons>
                  <S.WatchButton href={`#!`}>
                    <S.Icons src={Arrow} />
                    <S.WatchLink to={`/movie/${data.id}`}>
                      <S.ButtonText>Assistir</S.ButtonText>
                    </S.WatchLink>
                  </S.WatchButton>
                  <S.Add src={AddIcon} />
                  <S.Like src={LikeIcon} />
                  <S.Dislike src={DislikeIcon} className="dislike" />
                </S.ModalButtons>
              </S.Hero>
              <S.Info>
                <S.Main>
                  <S.Title>{data.title}</S.Title>
                  <S.Overview>{data.sinopsis}</S.Overview>
                </S.Main>
                <S.Line></S.Line>
                <S.Secondary>
                  <S.Row>
                    <S.Label>Lançamento: </S.Label>
                    <S.Description>{data.year}</S.Description>
                  </S.Row>
                  <br />
                  <S.Row>
                    <S.Label>Duração: </S.Label>
                    <S.Description>{data.duration}</S.Description>
                  </S.Row>
                  <br />
                  <S.Row>
                    <S.Label>Gênero: </S.Label>
                    <S.Description>{data.category}</S.Description>
                  </S.Row>
                  <br />
                  <S.Row>
                    <S.Label>Diretor: </S.Label>
                    <S.Description>{data.director}</S.Description>
                  </S.Row>
                  <br />
                </S.Secondary>
              </S.Info>
            </S.Content>
          </S.Dialog>
        </S.Modal>
      )}
    </>
  );
};

export default Modal;
