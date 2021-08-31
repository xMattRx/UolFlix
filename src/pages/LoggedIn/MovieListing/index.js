import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import FeaturedMovie from "../../../Components/FeaturedMovies";
import GlobalHeader from "../../../Components/GlobalHeader/index.js";
import Modal from "../../../Components/Modal"
import Footer from "../../../Components/Footer";
import api from "../../../Services/api";
import Instagram from "../../../Assets/instagram.svg";
import Twitter from "../../../Assets/twitter.svg";
import Youtube from "../../../Assets/youtube.svg";
import Facebook from "../../../Assets/facebook.svg";
import * as S from "./styles";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

toast.configure();


import Genre from "../../../Components/Genre"

export function MovieListing() {
  const [blackHeader, setBlackHeader] = useState(false);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([
    { genre: "Animação", movies: [] },
    { genre: "Comédia", movies: [] },
    { genre: "Drama", movies: [] },
    { genre: "Ficção", movies: [] },
    { genre: "Romance", movies: [] },
    { genre: "Suspense", movies: [] },
    { genre: "Terror", movies: [] },
    { genre: "Ação", movies: [] },
    { genre: "Aventura", movies: [] },
    { genre: "Documentário", movies: [] },
    { genre: "Fantasia", movies: [] }
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  let cat = window.location.href.split("/")[3];
  let movieCat = window.location.href.split("/")[4];
  cat = cat.split("#")[0];
  if (movieCat) movieCat = movieCat.split("#")[0];

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

  const getMovies = () => {
    try {
      //ALL MOVIES
      let apiGetReturned = api.get(`/videos/?page=${currentPage}`);
      apiGetReturned.then(value => {
        let movies = value.data.data;

        let next;
        let max = value.data.meta.last_page;

        for (next = currentPage + 1; next <= max; ++next) {
          let apiGetReturned2 = api.get(`/videos/?page=${next}`);
          apiGetReturned2.then(value => {
            let movies2 = value.data.data;
            movies2.forEach((element, index) => {
              element.key = index;
              movies.push(element);
            });
            if (next > max) {
              setMovies(movies)
              getGenres(movies)
            }
          });
        }
        //ALL MOVIES
      });
    } catch (e) {
      console.log(e);
    }
  }

  const getGenres = (movies) => {
    let array = [
      { genre: "Animação", movies: [] },
      { genre: "Comédia", movies: [] },
      { genre: "Drama", movies: [] },
      { genre: "Ficção", movies: [] },
      { genre: "Romance", movies: [] },
      { genre: "Suspense", movies: [] },
      { genre: "Terror", movies: [] },
      { genre: "Ação", movies: [] },
      { genre: "Aventura", movies: [] },
      { genre: "Documentário", movies: [] },
      { genre: "Fantasia", movies: [] }
    ]
    let genreArray = array;
    movies.forEach((movie) => {
      genreArray.forEach((element) => {
        if (movie.category === element.genre) {
          element.movies.push(movie);
        }
      })
    })

    setGenres(genreArray)
  }

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

        sessionStorage.removeItem("user");
        sessionStorage.setItem("user", JSON.stringify(loggedUser));
      })
      .catch(e => {
        notifyError("Erro: usuário não verificado");
        sessionStorage.clear();
        console.log(e);
      });
  }, []);

  const getModal = () => {
    if (modalOpen === true) {
      setModalOpen(false);
      history.push("/browse");
    } else {
      setModalOpen(true);
    }
  }


  useEffect(() => {
    getUser();
    getMovies();
  }, []);

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

  return (
    <>
      <S.MovieListingStyle />
      <div>
        <GlobalHeader black={blackHeader} />
        <FeaturedMovie />

        {movies.length != 0 &&
          genres.map((element, key) => {
            return <Genre setModalOpen={getModal} modalOpen={modalOpen} key={key} genre={element} />
          })
        }

        {movies.length <= 0 && (
          <div className="loading">
            <S.Loading></S.Loading>
          </div>
        )}
        {modalOpen && <Modal setModalOpen={getModal} modalOpen={modalOpen} movieCat={movieCat} />}

      </div>
      <Footer.Wrapper cat={cat}>
        <Footer>
          <S.SocialLinks>
            <S.SocialIcons src={Facebook}></S.SocialIcons>
            <S.SocialIcons src={Instagram}></S.SocialIcons>
            <S.SocialIcons src={Twitter}></S.SocialIcons>
            <S.SocialIcons src={Youtube}></S.SocialIcons>
          </S.SocialLinks>
          <Footer.Break />
          <Footer.Row>
            <Footer.Column>
              <Footer.Link href="#!">Idioma e legendas</Footer.Link>
              <Footer.Link href="#!">Imprensa</Footer.Link>
              <Footer.Link href="#!">Privacidade</Footer.Link>
              <Footer.Link href="#!">Entre em contato</Footer.Link>
            </Footer.Column>

            <Footer.Column>
              <Footer.Link href="#!">Audiodescrição</Footer.Link>
              <Footer.Link href="#!">Relações com investidores</Footer.Link>
              <Footer.Link href="#!">Avisos legais</Footer.Link>
            </Footer.Column>

            <Footer.Column>
              <Footer.Link href="#!">Centro de ajuda</Footer.Link>
              <Footer.Link href="#!">Carreiras</Footer.Link>
              <Footer.Link href="#!">Preferências de cookies</Footer.Link>
            </Footer.Column>

            <Footer.Column>
              <Footer.Link href="#!">Cartão pré-pago</Footer.Link>
              <Footer.Link href="#!">Termos de uso</Footer.Link>
              <Footer.Link href="#!">Informações corporativas</Footer.Link>
            </Footer.Column>
          </Footer.Row>
          <Footer.Break />

          <S.ServiceCode>Código do serviço</S.ServiceCode>
          <Footer.Text>© UolFlix Brasil</Footer.Text>
        </Footer>
      </Footer.Wrapper>
    </>
  );

}