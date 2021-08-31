import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import GlobalHeader from "../../../Components/GlobalHeader";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import api from "../../../Services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Trash from "../../../Assets/Lixeira.svg";
import Pencil from "../../../Assets/Pencil.svg";
import { Redirect } from "react-router-dom";

toast.configure();

export function MyMovies() {
  const [errorYoutubeVideoID, setErrorYoutubeVideoID] = useState(false);
  const [errorThumbnailUrl, setErrorThumbnailUrl] = useState(false);
  const [errorSinopsis, setErrorSinopsis] = useState(false);
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDirector, setErrorDirector] = useState(false);
  const [errorDuration, setErrorDuration] = useState(false);
  const [errorYear, setErrorYear] = useState(false);
  const [movies, setMovies] = useState([]);
  const [youtubeVideoId, setYoutubeVideoId] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [year, setYear] = useState("");
  const [videoId, setVideoId] = useState("");

  let schema;
  let history = useHistory();

  const formRef = useRef(null);

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

  const getUser = useCallback(async () => {
    let apiGetReturned = api.get("/users/info");

    apiGetReturned
      .then(value => {
        let loggedUser = value.data;
        sessionStorage.setItem("user", JSON.stringify(loggedUser));
      })
      .catch(e => {
        notifyError("Erro: usuário não verificado");
        sessionStorage.clear();
        console.log(e);
      });
  }, []);

  const initialMovieData = useCallback(async () => {
    await getUser();
    let loggedUser = JSON.parse(sessionStorage.getItem("user"));
    let movieData;
    if (loggedUser) {
      movieData = loggedUser.videos;
      // console.log("movieData", movieData);
      if (!movieData) {
        movieData = [];
      }
    } else {
      notifyError("Erro: usuário não verificado");
      sessionStorage.clear();
    }
    sessionStorage.setItem("movieData", JSON.stringify(movieData));
    // console.log("movieData", movieDataTeste.videos, typeof movieDataTeste.videos ,movieDataTeste.videos);
    setMovies(movieData);
    // return movieData;
  }, []);

  const ChangeFalse = useCallback(() => {
    let isMounted = true;
    if (isMounted) {
      setErrorYoutubeVideoID(false);
      setErrorThumbnailUrl(false);
      setErrorSinopsis(false);
      setErrorTitle(false);
      setErrorDirector(false);
      setErrorDuration(false);
      setErrorYear(false);

      getUser();
    }
  }, []);

  async function formValidation(data) {
    const currentYear = new Date().getFullYear();
    schema = Yup.object().shape({
      youtubeVideoId: Yup.string().required("Informe uma url para o vídeo"),
      thumbnailUrl: Yup.string().required("Informe uma url para a thumbnail"),
      sinopsis: Yup.string().required("Informe uma sinopse"),
      title: Yup.string().required("Informe o título"),
      director: Yup.string().required("Informe ao menos um(a) diretor(a)"),
      duration: Yup.string().required("Informe a duração"),
      year: Yup.number()
        .typeError("Informe o ano de lançamento")
        .required("Informe o ano de lançamento")
        .max(currentYear, "Esse filme veio do futuro?"),
    });

    await schema.validate(data, {
      abortEarly: false,
    });
  }

  const deleteMovie = useCallback(id => {
    let apiDeleteReturned = api
      .delete(`/videos/${id}`)
      .then(() => {
        let movieData = JSON.parse(sessionStorage.getItem("movieData"));
        var deletedMovieIndex = -1;
        if (movieData.length !== 1) {
          for (let i = 0; i < movieData.length; i++) {
            if (movieData[i].id === id) {
              deletedMovieIndex = i;
            }
          }
          if (deletedMovieIndex > -1) {
            movieData.splice(deletedMovieIndex, 1);
          }
        } else {
          movieData = [];
        }
        notifySuccess("Filme apagado!");
        sessionStorage.setItem("movieData", JSON.stringify(movieData));
        setMovies(movieData);
      })
      .catch(err => {
        notifyError("Erro: não foi possível apagar o filme.");
        console.log("myMovies deleteMovie", err);
      });
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      ChangeFalse();
      initialMovieData();
    }
  }, []);

  return (
    <>
      <S.BackgroundStyle />
      <GlobalHeader update={true} />
      <S.RowContainer>
        <S.Container>
          <S.Section>
            <S.Content>
              <S.Title>Meus Filmes</S.Title>
              <Link to="/MovieRegister">
                <S.Add>+ ADICIONAR FILMES</S.Add>
              </Link>
            </S.Content>
          </S.Section>
          {movies && movies.length > 1 ? (
            movies.map(movie => {

              return (
                <React.Fragment key={`button-${movie.id}`}>
                  <S.Section>
                    <S.Content>
                      <iframe
                        width="300"
                        height="180"
                        src={`https://www.youtube.com/embed/${movie.youtubeVideoId}`}
                        title={movie.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>

                      <S.Information>
                        <S.Title>
                          {movie.title} ({movie.year})
                          <S.Icons>
                            <S.Trash
                              src={`${Trash}`}
                              onClick={() => {
                                deleteMovie(movie.id);
                              }}
                            />
                            <S.Pencil
                              src={`${Pencil}`}
                              onClick={() => {
                                history.push(`/MovieRegister/${movie.id}`);
                              }}
                            />
                          </S.Icons>
                        </S.Title>
                        <S.Observation>
                          {movie.category} • {movie.duration} • {movie.director}
                        </S.Observation>
                        <S.Synopsis>{movie.sinopsis}</S.Synopsis>
                      </S.Information>
                    </S.Content>
                  </S.Section>
                </React.Fragment>
              );
            })
          ) : movies && movies.length == 1 ? (
            <React.Fragment key={`button-${movies[0].id}`}>
              <S.Section>
                <S.ContentVideo>
                  <iframe
                    width="300"
                    height="180"
                    src={`https://www.youtube.com/embed/${movies[0].youtubeVideoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                  <S.Information>
                    <S.Title>
                      {movies[0].title} ({movies[0].year})
                      <S.Icons>
                        <S.Trash
                          src={`${Trash}`}
                          onClick={() => {
                            deleteMovie(movies[0].id);
                          }}
                        />
                        <S.Pencil
                          src={`${Pencil}`}
                          onClick={() => {
                            history.push(`/MovieRegister/${movies[0].id}`);
                          }}
                        />
                      </S.Icons>
                    </S.Title>

                    <S.Observation>
                      {movies[0].category} • {movies[0].duration} •{" "}
                      {movies[0].director}
                    </S.Observation>
                    <S.Synopsis>{movies[0].sinopsis}</S.Synopsis>
                  </S.Information>
                </S.ContentVideo>
              </S.Section>
            </React.Fragment>
          ) : (
            <div>
              <h1 style={{ color: "white" }}>{"Nenhum filme cadastrado :)"}</h1>
            </div>
          )}
        </S.Container>
      </S.RowContainer>
    </>
  );
}
