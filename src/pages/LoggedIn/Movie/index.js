import React, { useEffect, useState } from 'react'
import GlobalHeader from "../../../Components/GlobalHeader";
import api from "../../../Services/api";
import * as S from "./styles";
import { Center, Title, Iframe, Information } from "./styles";

export function Movie() {
  const [data, setData] = useState({})

  let cat = window.location.href.split("/")[4];

  const getMovie = async () => {
    let token = sessionStorage.getItem("auth_token");
    const config = {
      headers: { Authorization: "Bearer " + token }
    }

    try {
      let apiGetReturned = api.get(`/videos/${cat}`, config);
      apiGetReturned.then((value) => {
        // console.log(value.data)
        setData(value.data)
      })
    } catch (e) {
      console.log(e);
      console.log("Erro: ", e);
      // history.push("/browse");
    }
  }

  useEffect(() => {
    getMovie()
  }, [])


  return (
    <>
      <S.MovieListingStyle />
      <>
        <GlobalHeader />
        {data &&
          <Center>
            <Title>{data.title} ({data.year})</Title>
            <Iframe src={`https://www.youtube.com/embed/${data.youtube_video_id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
            {/* <Information>Descrição: {data.sinopsis}</Information>
            <Information>Duração: {data.duration}</Information>
            <Information>Diretor: {data.director}</Information> */}
          </Center>

        }
      </>
    </>
  )
}


