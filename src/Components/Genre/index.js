import React, { useState, useRef, useEffect, useCallback } from 'react';
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import * as S from "./styles/genre.js";
import PlayIcon from "../../Assets/play.svg";
import AddIcon from "../../Assets/add.svg";
import LikeIcon from "../../Assets/like.svg";
import DislikeIcon from "../../Assets/dislike.svg";
import Arrow from "../../Assets/arrowinfo.svg";
import Modal from '../Modal/index.js';


export default function index({ genre, modalOpen, setModalOpen }) {

    const [scrollX, setScrollX] = useState(0);

    //SETAS
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = genre.movies.length * 260;
        if (window.innerWidth - listW > x) {
            x = window.innerWidth - listW - 60;
        }
        setScrollX(x);
    };



    return (
        <>
            <S.Lists>
                <S.Section>
                    <S.DivSubtitle>
                        <S.Subtitle>{genre.genre}</S.Subtitle>
                    </S.DivSubtitle>
                    <S.DivSubtitle>
                        <S.List style={{
                            marginLeft: scrollX,
                            width: (genre.movies.length) * 250
                        }}>
                            <S.ArrowLeft onClick={(() => {
                                handleLeftArrow()
                            })}>
                                <RiArrowDropLeftLine />
                            </S.ArrowLeft>
                            <S.ArrowRight onClick={(() => {
                                handleRightArrow()
                            })}>
                                <RiArrowDropRightLine />
                            </S.ArrowRight>
                            {genre.movies.length != 0 &&
                                genre.movies.map((element, key) => {
                                    return <S.Movie onClick={setModalOpen} modalOpen={modalOpen} key={key}>
                                        <Link to={`/browse/${element.id}`}><S.Thumb src={`${element.thumbnail_url}`} /></Link>
                                        <Link to={`/browse/${element.id}`}>
                                            <S.MovieInfo>

                                                <S.DivSubtitle>
                                                    <S.IconDiv>
                                                        <S.MovieIcons>
                                                            <Link to={`/movie/${element.id}`}><S.Play src={PlayIcon} /></Link>
                                                            <S.Add src={AddIcon} />
                                                            <S.Like src={LikeIcon} />
                                                            <S.Dislike src={DislikeIcon} className="dislike" />
                                                        </S.MovieIcons>
                                                        <S.InfoIcon>
                                                            <S.Arrow src={Arrow} />
                                                        </S.InfoIcon>
                                                    </S.IconDiv>
                                                    <S.Title>{element.title}</S.Title>
                                                    <S.MovieInfoTop>
                                                        <span>{element.duration}</span>
                                                        <S.Limit>•</S.Limit>
                                                        <span>{element.year}</span>
                                                        <S.Limit>•</S.Limit>
                                                        <span>{element.category}</span>
                                                    </S.MovieInfoTop>
                                                </S.DivSubtitle>
                                            </S.MovieInfo>
                                        </Link>
                                    </S.Movie>
                                })
                            }
                        </S.List>
                    </S.DivSubtitle>
                </S.Section>
            </S.Lists>

        </>
    )
}
