/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {
  Container,
  Section,
  FeaturedVertical,
  FeaturedButtons,
  FeaturedHorizontal,
  FeaturedName,
  FeaturedInfo,
  FeaturedPoints,
  FeaturedYear,
  FeaturedSeasons,
  FeaturedDescription,
  FeaturedTrailer,
  Icons,
  MovieLogo,
  ButtonText,
  WatchButton,
  MyListButton,
  FeaturedGenres,
} from "./styles/featuredmovies";
import Arrow from '../../Assets/play.svg';
import MoreInfo from '../../Assets/info.svg';
import CircleLogo from '../../Assets/thecirclelogo.webp';
import TheCircle from '../../Assets/thecircle.webp';
import ENLogo from '../../Assets/eununcalogo.webp';
import EuNunca from '../../Assets/eununca.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default ({ item }) => {
  // let firstDate = new Date(item.first_air_date);
  // let genres = [];
  // let image = `https://image.tmdb.org/t/p/original${item.backdrop_path}`
  // for (let i in item.genres) {
  //     genres.push(item.genres[i].name);
  // }

  // let description = item.overview;

  return (
    <Container>
      <Carousel
        showThumbs={false}
        autoPlay
        interval="5000"
        infiniteLoop={true}
        showIndicators={false}
        showArrows={false}
        showStatus={false}
      >
        <Section image={TheCircle}>
          <FeaturedVertical>
            <FeaturedHorizontal>
              <FeaturedName>
                <MovieLogo src={CircleLogo}></MovieLogo>
              </FeaturedName>
              <FeaturedInfo>
                <FeaturedPoints>
                  {/* {item.vote_average}*/} 97% relevante
                </FeaturedPoints>
                <FeaturedYear>{/*firstDate.getFullYear()*/}2020</FeaturedYear>
                <FeaturedSeasons>
                  {/*item.number_of_seasons*/} 1 Temporada
                  {/*item.number_of_seasons !== 1 ? 's' : ''*/}
                </FeaturedSeasons>
              </FeaturedInfo>
              <FeaturedDescription>
                {/* {description} */}
                Ser você ou criar um personagem? Nesta competição, os participantes tentam de tudo para criar laços ou enganar os desavisados. O prêmio: R$ 300 mil.
              </FeaturedDescription>
              <FeaturedButtons>
                <WatchButton href={`#!`}>
                  <Icons src={Arrow} />
                  <ButtonText>Assistir</ButtonText>
                </WatchButton>
                <MyListButton href={`#!`}>
                  <Icons src={MoreInfo} />
                  <ButtonText>Mais informações</ButtonText>
                </MyListButton>
              </FeaturedButtons>
            </FeaturedHorizontal>
          </FeaturedVertical>
        </Section>



        <Section image={EuNunca}>
          <FeaturedVertical>
            <FeaturedHorizontal>
              <FeaturedName>
                <img src={ENLogo}></img>
                {/* {item.original_name} */}
              </FeaturedName>
              <FeaturedInfo>
                <FeaturedPoints>
                  {/* {item.vote_average}*/} 97% relevante
                </FeaturedPoints>
                <FeaturedYear>{/*firstDate.getFullYear()*/}2021</FeaturedYear>
                <FeaturedSeasons>
                  {/*item.number_of_seasons*/} 2 Temporadas
                  {/*item.number_of_seasons !== 1 ? 's' : ''*/}
                </FeaturedSeasons>
              </FeaturedInfo>
              <FeaturedTrailer>
                Assista ao trailer da segunda temporada agora
              </FeaturedTrailer>
              <FeaturedDescription>
                {/* {description} */}
                Ela teve um ano complicado. Agora, tudo que essa jovem quer é melhorar seu status social. Será que os amigos, a família e seus sentimentos vão ajudar?
              </FeaturedDescription>
              <FeaturedButtons>
                <WatchButton href={`#!`}>
                  <Icons src={Arrow} />
                  <ButtonText>Assistir</ButtonText>
                </WatchButton>
                <MyListButton href={`#!`}>
                  <Icons src={MoreInfo} />
                  <ButtonText>Mais informações</ButtonText>
                </MyListButton>
              </FeaturedButtons>
            </FeaturedHorizontal>
          </FeaturedVertical>
        </Section>
      </Carousel>
    </Container>
  );
};
