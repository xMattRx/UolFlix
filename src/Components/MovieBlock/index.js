import React, { useState } from "react";
import * as S from "./styles/movieblock";
import PlayIcon from '../../Assets/play.svg';
import AddIcon from '../../Assets/add.svg';
import LikeIcon from '../../Assets/like.svg';
import DislikeIcon from '../../Assets/dislike.svg';
import Arrow from '../../Assets/arrowinfo.svg';
import { Link } from "react-router-dom";


export default ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <S.MovieBlock onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <Link to={`/movie/${item.id}`}><S.MovieImg className="movieImg" src={item.thumbnail_url} /></Link>
        {isHovered && (
          <>
            <S.MovieInfo>
              <S.IconDiv>
                <S.MovieIcons>
                  <input type="image" src={PlayIcon} className="play" />
                  <input type="image" src={AddIcon} className="add" />
                  <input type="image" src={LikeIcon} className="like" />
                  <input type="image" src={DislikeIcon} className="dislike" />
                </S.MovieIcons>
                <S.InfoIcon>
                  <input type="image" src={Arrow} className="arrow" />
                </S.InfoIcon>
              </S.IconDiv>
              <S.MovieInfoTop>
                <span>{item.duration}</span>
                <span className="limit">•</span>
                <span>{item.year}</span>
                <span className="limit">•</span>
                <span>{item.category}</span>
              </S.MovieInfoTop>
              {/* <S.MovieDescription>
                {item.sinopsis}
              </S.MovieDescription> */}
            </S.MovieInfo>
          </>
        )}

      </S.MovieBlock>
    </>
  );
};
