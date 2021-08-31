import React, { useRef, useState, useEffect, useCallback } from "react";
import GlobalHeader from "../../../Components/GlobalHeader";
import * as S from "./styles";
import Trash from "../../../Assets/RedTrash.svg";
import MovieThumb from "../../../Assets/MovieThumbnail.svg";
import Footer from "../../../Components/Footer";
import * as Yup from "yup";
import api from "../../../Services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

export function MovieRegister() {
  const [errorYoutubeVideoID, setErrorYoutubeVideoID] = useState(false);
  const [errorThumbnailUrl, setErrorThumbnailUrl] = useState(false);
  const [errorSinopsis, setErrorSinopsis] = useState(false);
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDirector, setErrorDirector] = useState(false);
  const [errorDuration, setErrorDuration] = useState(false);
  const [errorCategory, setErrorCategory] = useState(false);
  const [errorYear, setErrorYear] = useState(false);
  const [movies, setMovies] = useState([]);
  const [youtubeVideoId, setYoutubeVideoId] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [videoId, setVideoId] = useState("");

  let schema;
  let history = useHistory();

  let cat = window.location.href.split("/")[4];
  // console.log("CAT: ", cat);

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
    return movieData;
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
      setErrorCategory(false);

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
      category: Yup.string().required("Informe a categoria do filme"),
      year: Yup.number()
        .typeError("Informe o ano de lançamento")
        .required("Informe o ano de lançamento")
        .max(currentYear, "Esse filme veio do futuro?"),
    });

    await schema.validate(data, {
      abortEarly: false,
    });
  }

  const handleClick = useCallback(movie => {
    // console.log("handleClick", movie);
    setYoutubeVideoId(movie.youtubeVideoId);
    setThumbnailUrl(movie.thumbnailUrl);
    setSinopsis(movie.sinopsis);
    setTitle(movie.title);
    setDirector(movie.director);
    setDuration(movie.duration);
    setCategory(movie.category);
    setYear(movie.year);
    setVideoId(movie.id);
  });

  const saveMovie = async () => {
    let data = {
      youtubeVideoId: youtubeVideoId,
      thumbnailUrl: thumbnailUrl,
      sinopsis: sinopsis,
      title: title,
      director: director,
      duration: duration,
      category: category,
      year: year,
    };

    try {
      await formValidation(data);
      // console.log(data);
      // Validation passed

      try {
        let apiPutReturned = await api.post("/videos", data);
        // console.log(apiPutReturned);
        let movieData = JSON.parse(sessionStorage.getItem("movieData"));
        if (movieData.length > 1) {
          movieData.push(apiPutReturned.data);
        } else {
          let arr = [];
          arr.push(apiPutReturned.data);
          // console.log("arr = ", arr);
          movieData.push(arr);
          // console.log("movieData = ", movieData);
        }

        sessionStorage.setItem("movieData", JSON.stringify(movieData));
        setMovies(movieData);
        // history.push("/MovieRegister");
        notifySuccess("Filme salvo!");
        // history.push("/MyMovies");
        ChangeFalse();
        // window.location.reload();
      } catch (err) {
        notifyError("Erro: ", err.message);
        console.log(err);
      }

      formRef.current.setErrors({});
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        setErrorYoutubeVideoID(errorMessages.youtubeVideoId ? true : false);
        setErrorThumbnailUrl(errorMessages.thumbnailUrl ? true : false);
        setErrorSinopsis(errorMessages.sinopsis ? true : false);
        setErrorTitle(errorMessages.title ? true : false);
        setErrorDirector(errorMessages.director ? true : false);
        setErrorDuration(errorMessages.duration ? true : false);
        setErrorYear(errorMessages.year ? true : false);
        setErrorCategory(errorMessages.category ? true : false);

        formRef.current.setErrors(errorMessages);
      }
    }
  };

  const updateMovie = async () => {
    // console.log("updateMovie");
    let data = {
      id: videoId,
      youtubeVideoId: youtubeVideoId,
      thumbnailUrl: thumbnailUrl,
      sinopsis: sinopsis,
      title: title,
      director: director,
      duration: duration,
      category: category,
      year: year,
    };

    try {
      await formValidation(data);
      // console.log("updateMovie: after formValidation");
      let oldMovie;
      let oldMovieIndex;
      if (movies.length > 1) {
        oldMovie = movies.find(movie => movie.id == data.id);
        oldMovieIndex = movies.indexOf(oldMovie);
      } else if (movies.length == 1) {
        oldMovie = movies[0];
        // const oldMovieIndex = 0;
      } else {
        notifyError("Você precisa cadastrar um filme!");
      }

      let newObj = {};
      if (oldMovie.youtubeVideoId !== data.youtubeVideoId)
        newObj.youtubeVideoId = data.youtubeVideoId;
      if (oldMovie.thumbnailUrl !== data.thumbnailUrl)
        newObj.thumbnailUrl = data.thumbnailUrl;
      if (oldMovie.sinopsis !== data.sinopsis) newObj.sinopsis = data.sinopsis;
      if (oldMovie.title !== data.title) newObj.title = data.title;
      if (oldMovie.director !== data.director) newObj.director = data.director;
      if (oldMovie.duration !== data.duration) newObj.duration = data.duration;
      if (oldMovie.year !== data.year) newObj.year = data.year;
      if (oldMovie.category !== data.category) newObj.category = data.category;

      // console.log(newObj);
      // Validation passed

      if (Object.keys(newObj).length) {
        try {
          // const token = sessionStorage.getItem("auth_token");
          // const config = {
          //   headers: { Authorization: "Bearer " + token },
          // };
          let apiPatchReturned = await api.patch(`/videos/${data.id}`, newObj);
          // console.log(apiPatchReturned);
          let newMovieData = movies;
          if (movies.length == 1) {
            newMovieData[0] = data;
          } else {
            newMovieData[oldMovieIndex] = data;
          }
          setMovies(newMovieData);
          sessionStorage.setItem("movieData", JSON.stringify(newMovieData));
          notifySuccess("Filme atualizado!");
          // history.push("/MyMovies");
          // history.push("/Profile");
          ChangeFalse();
        } catch (err) {
          notifyError("Erro: ", err.message);
          console.log(err);
        }

        formRef.current.setErrors({});
      } else {
        notifyError("Você precisa modificar algum dos campos!");
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        setErrorYoutubeVideoID(errorMessages.youtubeVideoId ? true : false);
        setErrorThumbnailUrl(errorMessages.thumbnailUrl ? true : false);
        setErrorSinopsis(errorMessages.sinopsis ? true : false);
        setErrorTitle(errorMessages.title ? true : false);
        setErrorDirector(errorMessages.director ? true : false);
        setErrorDuration(errorMessages.duration ? true : false);
        setErrorYear(errorMessages.year ? true : false);
        setErrorCategory(errorMessages.category ? true : false);

        formRef.current.setErrors(errorMessages);
      }
    }
  };

  const deleteMovie = async () => {
    let data = {
      id: videoId,
      youtubeVideoId: youtubeVideoId,
      thumbnailUrl: thumbnailUrl,
      sinopsis: sinopsis,
      title: title,
      director: director,
      duration: duration,
      category: category,
      year: year,
    };

    try {
      await formValidation(data);
      // console.log(data);
      // Validation passed

      try {
        if (movies.length > 0) {
          let isValidMovie = false;
          if (movies.length == 1) {
            let movie = movies[0];
            if (
              data.id === movie.id &&
              data.youtubeVideoId === movie.youtubeVideoId &&
              data.thumbnailUrl === movie.thumbnailUrl &&
              data.sinopsis === movie.sinopsis &&
              data.title === movie.title &&
              data.director === movie.director &&
              data.duration === movie.duration &&
              data.year === movie.year &&
              data.category === movie.category
            ) {
              isValidMovie = true;
            }
          } else {
            for (let movie of movies) {
              if (
                data.id === movie.id &&
                data.youtubeVideoId === movie.youtubeVideoId &&
                data.thumbnailUrl === movie.thumbnailUrl &&
                data.sinopsis === movie.sinopsis &&
                data.title === movie.title &&
                data.director === movie.director &&
                data.duration === movie.duration &&
                data.year === movie.year &&
                data.category === movie.category
              ) {
                isValidMovie = true;
              }
            }
          }

          if (!isValidMovie) {
            notifyError("Filme não encontrado");
          } else {
            api
              .delete(`/videos/${data.id}`)
              .then(value => {
                // console.log(value);
                let movieData = JSON.parse(sessionStorage.getItem("movieData"));
                // console.log("DELETE (movieData): ", movieData);
                var deletedMovieIndex = -1;
                if (movieData.length == 1) {
                  movieData = [];
                } else {
                  for (let i = 0; i < movieData.length; i++) {
                    if (movieData[i].id === data.id) {
                      deletedMovieIndex = i;
                    }
                  }

                  if (deletedMovieIndex > -1) {
                    movieData.splice(deletedMovieIndex, 1);
                  } else {
                    throw new Error("Erro");
                  }
                }
                notifySuccess("Filme apagado!");
                sessionStorage.setItem("movieData", JSON.stringify(movieData));
                setMovies(movieData);
                ChangeFalse();
              })
              .catch(err => {
                console.log("myMovies deleteMovie", err);
              });
          }
        } else {
          throw new Error("Não foi possível deletar o filme.");
        }
      } catch (err) {
        notifyError("Erro: ", err.message);
        console.log(err);
      }

      formRef.current.setErrors({});
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        setErrorYoutubeVideoID(errorMessages.youtubeVideoId ? true : false);
        setErrorThumbnailUrl(errorMessages.thumbnailUrl ? true : false);
        setErrorSinopsis(errorMessages.sinopsis ? true : false);
        setErrorTitle(errorMessages.title ? true : false);
        setErrorDirector(errorMessages.director ? true : false);
        setErrorDuration(errorMessages.duration ? true : false);
        setErrorYear(errorMessages.year ? true : false);
        setErrorCategory(errorMessages.category ? true : false);

        formRef.current.setErrors(errorMessages);
      }
    }
  };

  const changeMovie = useCallback(cat => {
    let movie = api.get(`/videos/${cat}`)
      .then((value) => {
        let movie = value.data;
        setYoutubeVideoId(movie.youtube_video_id);
        setThumbnailUrl(movie.thumbnail_url);
        setSinopsis(movie.sinopsis);
        setTitle(movie.title);
        setDirector(movie.director);
        setDuration(movie.duration);
        setCategory(movie.category);
        setYear(movie.year);
        setVideoId(movie.id);
      }).catch(e => {
        notifyError("Erro: Filme não encontrado.");
        console.log("changeMovie MovieReg error: ", e, e.response);
        history.push("/MyMovies");
      })
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      ChangeFalse();

      initialMovieData();
      // sessionStorage.setItem("movies", JSON.stringify(movieData));
      if (!movies) {
        let sessionStorageMovies = JSON.parse(sessionStorage.getItem("movies"));
        if (!sessionStorageMovies) setMovies(sessionStorageMovies);
      }

      if (cat !== undefined) {
        changeMovie(cat);
      }
    }
  }, []);

  return (
    <>
      <S.BackgroundStyle />
      <GlobalHeader />
      <S.RowContainer>
        <S.Container>
          <S.Section>
            <S.Content>
              <S.Title>{cat === undefined ? "Adicionar Filme" : "Atualizar Filme"}</S.Title>
              {/* <S.Link>
                                <S.DeleteDiv type="submit"
                                    name="apagar"
                                    onClick={e => {
                                        e.preventDefault();
                                        deleteMovie();
                                    }}>
                                    <S.Trash src={Trash} /><S.Delete>Descartar</S.Delete>
                                </S.DeleteDiv>
                            </S.Link> */}
            </S.Content>
          </S.Section>
        </S.Container>
      </S.RowContainer>
      <S.RowContainer>
        <S.MovieContainer>
          <S.Section>
            <S.ThumbnailWrapper>
              <S.MovieThumbnail
                src={thumbnailUrl !== "" ? thumbnailUrl : MovieThumb}
              />
            </S.ThumbnailWrapper>
            <S.InputDiv>
              <S.InputLabel>ID</S.InputLabel>
              <S.Form ref={formRef}>
                <S.InputField
                  type="text"
                  placeholder="1"
                  name="video_id"
                  type="text"
                  value={videoId == null ? "" : videoId}
                  onChange={e => {
                    e.preventDefault();
                    setVideoId(e.target.value);
                  }}
                  disabled
                />
                <S.InputLabel>ID do Vídeo</S.InputLabel>
                <S.InputField
                  type="text"
                  placeholder="Fp9pNPdNwjI"
                  name="youtubeVideoId"
                  type="text"
                  value={youtubeVideoId == null ? "" : youtubeVideoId}
                  onChange={e => {
                    e.preventDefault();
                    setYoutubeVideoId(e.target.value);
                  }}
                />
                <S.InputLabel>URL da Thumbnail</S.InputLabel>
                <S.InputField
                  type="text"
                  placeholder="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rKq1Vlw0Bqe2EEvdmIkkkgPQAGf.jpg"
                  name="thumbnailUrl"
                  type="text"
                  value={thumbnailUrl == null ? "" : thumbnailUrl}
                  onChange={e => {
                    e.preventDefault();
                    setThumbnailUrl(e.target.value);
                  }}
                />
              </S.Form>
            </S.InputDiv>
          </S.Section>
          <S.InfoSection>
            <S.Title>Visão Geral</S.Title>
            <S.MovieContent>
              <S.InputDiv>
                <S.InputLabel>Título</S.InputLabel>
                <S.InputField
                  type="text"
                  placeholder="Viúva Negra"
                  name="title"
                  type="text"
                  value={title == null ? "" : title}
                  onChange={e => {
                    e.preventDefault();
                    setTitle(e.target.value);
                  }}
                />
              </S.InputDiv>
            </S.MovieContent>
            <S.SmallerMovieContent>
              <S.SmallerInputDiv>
                <S.InputLabel>Ano de Lançamento</S.InputLabel>
                <S.InputField
                  type="text"
                  name="year"
                  type="number"
                  value={year == null ? "" : year}
                  onChange={e => {
                    e.preventDefault();
                    setYear(e.target.value);
                  }}
                  placeholder="2021"
                />
              </S.SmallerInputDiv>
              <S.Separator></S.Separator>
              <S.SmallerInputDiv>
                <S.InputLabel>Duração</S.InputLabel>
                <S.InputField
                  type="text"
                  name="duration"
                  type="text"
                  value={duration == null ? "" : duration}
                  onChange={e => {
                    e.preventDefault();
                    setDuration(e.target.value);
                  }}
                  placeholder="2h 13m"
                />
              </S.SmallerInputDiv>
              <S.Separator></S.Separator>
              <S.SmallerInputDiv>
                <S.InputLabel>Diretor</S.InputLabel>
                <S.InputField
                  type="text"
                  name="director"
                  placeholder="Diretor(es)"
                  type="text"
                  value={director == null ? "" : director}
                  onChange={e => {
                    e.preventDefault();
                    setDirector(e.target.value);
                  }}
                />
              </S.SmallerInputDiv>
            </S.SmallerMovieContent>
            <S.MovieContent>
              <S.InputDiv>
                <S.InputLabel>Categoria</S.InputLabel>
                <S.SelectField name="category" onChange={e => {
                  e.preventDefault();
                  setCategory(e.target.value);
                }}>
                  <option value="Ação">Ação</option>
                  <option value="Aventura">Aventura</option>
                  <option value="Animação">Animação</option>
                  <option value="Comédia">Comédia</option>
                  <option value="Crime">Crime</option>
                  <option value="Documentário">Documentário</option>
                  <option value="Drama">Drama</option>
                  <option value="Fantasia">Fantasia</option>
                  <option value="Ficção">Ficção</option>
                  <option value="Romance">Romance</option>
                  <option value="Suspense">Suspense</option>
                  <option value="Terror">Terror</option>
                </S.SelectField>
              </S.InputDiv>
            </S.MovieContent>
            <S.MovieContent>
              <S.InputDiv>
                <S.InputLabel>Sinopse</S.InputLabel>
                <S.Sinopsis
                  name="sinopsis"
                  type="text"
                  value={sinopsis == null ? "" : sinopsis}
                  onChange={e => {
                    e.preventDefault();
                    setSinopsis(e.target.value);
                  }}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
              </S.InputDiv>
            </S.MovieContent>
          </S.InfoSection>
          <S.ButtonDiv>
            <S.Save
              type="submit"
              name="salvar"
              onClick={e => {
                e.preventDefault();
                saveMovie();
              }}
              cat={cat}
            >
              Salvar
            </S.Save>
            <S.Update
              type="submit"
              name="atualizar"
              onClick={e => {
                e.preventDefault();
                updateMovie();
              }}
              cat={cat}
            >
              Atualizar
            </S.Update>
            <S.Separator></S.Separator>
            <S.Cancel
              onClick={e => {
                e.preventDefault();
                history.push("/MyMovies")
              }}
            >
              Cancelar
            </S.Cancel>
          </S.ButtonDiv>
        </S.MovieContainer>
      </S.RowContainer>
      <S.Divider></S.Divider>
      <Footer.Wrapper>
        <Footer>
          <Footer.Title>Dúvidas? Entre em contato.</Footer.Title>
          <Footer.Break />
          <Footer.Row>
            <Footer.Column>
              <Footer.Link href="#!">Áudio e Legendas</Footer.Link>
              <Footer.Link href="#!">Imprensa</Footer.Link>
              <Footer.Link href="#!">Declaração de Privacidade</Footer.Link>
            </Footer.Column>

            <Footer.Column>
              <Footer.Link href="#!">Centro de ajuda</Footer.Link>
              <Footer.Link href="#!">Carreiras</Footer.Link>
            </Footer.Column>

            <Footer.Column>
              <Footer.Link href="#!">Cartão pré-pago</Footer.Link>
              <Footer.Link href="#!">Preferências de cookies</Footer.Link>
            </Footer.Column>

            <Footer.Column>
              <Footer.Link href="#!">Relações com investidores</Footer.Link>
              <Footer.Link href="#!">Termos de uso</Footer.Link>
            </Footer.Column>
          </Footer.Row>
          <Footer.Break />

          {/* <S.ServiceCode>Código do serviço</S.ServiceCode> */}
          <Footer.Text>© UolFlix Brasil</Footer.Text>
        </Footer>
      </Footer.Wrapper>
    </>
  );
}
