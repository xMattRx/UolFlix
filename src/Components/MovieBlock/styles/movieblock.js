import styled from "styled-components/macro";

export const MovieBlock = styled.div`
  width: 300px;
  height: 200px;
  background: url( ${props => props.thumb ? `${props.thumb}` : ''} );
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;

  .limit {
    margin: 0 10px;
  }

  &:hover {
    transform: scale(1.1);
    width: 325px;
    height: 100%;
    padding-bottom: 10px;
    /* box-shadow: rgb(0 0 0 / 75%) 0px 3px 10px; */
    border-radius: 5px;
    z-index: 999;

    .movieImg {
      /* height: 200px; */
    }
  }
`;

// export const MovieTrailer = styled.video`
//     width: 100%;
//     height: 140px;
//     object-fit: cover;
//     position: absolute;
//     top: 0;
//     left: 0;
// `;

export const MovieVideo = styled.iframe`
    width: 100%;
    height: 140px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    &:hover{
      //allow: autoplay;
    }
`;

export const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  overflow-y: hidden;
  
`;

export const MovieInfoTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 1em 0 1em;
  font-size: 14px;
  font-weight: 600;
  color: gray;
`;


export const MovieDescription = styled.div`
  margin-bottom: 10px;
  font-size: 13px;
  padding: 0 1em 0 1em;
  color: white;
`;

export const IconDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoIcon = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding: 1em 1em 0 1em;

  .arrow {
    background-color: rgba(42,42,42,.6);
    border: 2px solid rgba(255,255,255,.5);
    padding: 5px;
    border-radius: 50%;
    font-size: 16px;

    &:hover {
      border: 2px solid white;
      cursor: pointer;
    }
  }
`;

export const MovieIcons = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding: 1em 1em 0 1em;

  .play {
    background-color: white;
    border: 2px solid white;
    padding: 6px;
    margin-right: 10px;
    border-radius: 50%;
    font-size: 16px;

    &:hover {
      background-color: gray;
      border: 2px solid gray;
      cursor: pointer;
    }
  }

  .add {
    background-color: rgba(42,42,42,.6);
    border: 2px solid rgba(255,255,255,.5);
    padding: 6px;
    margin-right: 10px;
    border-radius: 50%;
    font-size: 16px;

    &:hover {
      border: 2px solid white;
      cursor: pointer;
    }
  }

  .like {
    background-color: rgba(42,42,42,.6);
    border: 2px solid rgba(255,255,255,.5);
    padding: 6px;
    margin-right: 10px;
    border-radius: 50%;
    font-size: 16px;

    &:hover {
      border: 2px solid white;
      cursor: pointer;
    }
  }

  .dislike {
    background-color: rgba(42,42,42,.6);
    border: 2px solid rgba(255,255,255,.5);
    padding: 6px;
    margin-right: 10px;
    border-radius: 50%;
    font-size: 16px;

    &:hover {
      border: 2px solid white;
      cursor: pointer;
    }
  }
`;

