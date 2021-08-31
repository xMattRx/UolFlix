import styled, { createGlobalStyle } from "styled-components/macro";

export const MovieIcons = styled.div`
  display: flex;
`;
export const MovieInfoTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
  color: gray;
`;
export const SocialLinks = styled.div`
  display: flex;
  margin-bottom: 1em;`;

export const SocialIcons = styled.img`
  height: 36px;
  margin-right: 15px;
`;

export const ServiceCode = styled.button`
  font-size: 12px;
  background: 0 0;
  width: 12%;
  color: grey;
  border: solid 1px grey;
  padding: .5rem;

  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export const Lists = styled.div`
  margin-bottom: 10px;
  transition: all ease 0.5s;
  margin-left: 3%;

@media(max-width: 768px) {
  margin-top: 100px;
}

@media(max-width: 425px) {
  margin-top: 50px;
}
`

export const Section = styled.section`
    margin-top: 0px;
    position: relative;
    height: 190px;
    transition: all ease 0.5s;
  &:hover {
    z-index: 9;
  }
  &:first-child {
    margin-top: 50px;
    margin-bottom: 0px;
  }

@media(max-width: 768px) {
  height: 110px;

}

@media(max-width: 425px) {
  height: 130px;
}

`
export const Title = styled.p`
  display:flex;
  justify-content: center;
  margin-top: 11px;
  font-size: 16px;
  font-weight: bold;
  color: white;
`

export const DivSubtitle = styled.div`
&:first-child {
  padding-left: 0;
}
`
export const Subtitle = styled.h2`
display: table-cell;
vertical-align: bottom;
line-height: 1.25vw;
font-size: 26px;

@media(max-width: 425px) {
    font-size: 20px;
}
`

export const Arrows = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    width: 3.1%;
    height: 163px;
    text-align: center;
    align-items: center;
    justify-content: flex-end;
    z-index: 1;
    display: flex;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;
    position: absolute;
    font-size: 100px;
`

export const ArrowLeft = styled(Arrows)`
    left: 0;
    margin-left: -3.1%;
    `

export const ArrowRight = styled(Arrows)`
    
    right: 0;
`
export const List = styled.div`
    list-style: none;
    white-space: nowrap;
    padding: 20px 0;
    border: 1px solid transparent;
    display: block;
    transition: all ease 0.5s;    
    
    &::-webkit-scrollbar{
      display: none;
    }
    &:hover ${ArrowRight}{
      opacity: 1;
    }
    &:hover ${ArrowLeft}{
      opacity: 1;
    }
`

export const MovieInfo = styled.div`
    background-color: #171717;
    padding: 15px;
    height: 100px;
    margin-top:-5px;
    transform: scale(0);

`

export const InfoIcon = styled.div`
  display: flex;
`;

export const IconDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Play = styled.img`
    width: 18px;
    height: 18px;
    background-color: white;
    border: 2px solid white;
    padding: 5px;
    margin-right: 10px;
    border-radius: 50%;
    font-size: 16px;
    
    &:hover {
      background-color: gray;
      border: 2px solid gray;
      cursor: pointer;
    }
`

export const Add = styled.img`
    width: 18px;
    height: 18px;
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
`
export const Like = styled.img`
    width: 18px;
    height: 18px;
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
`
export const Dislike = styled.img`
width: 18px;
    height: 18px;
    background-color: rgba(42,42,42,.6);
    border: 2px solid rgba(255,255,255,.5);
    padding: 6px;
    margin-right: 10px;
    border-radius: 50%;
    font-size: 16px;
    &:hover{
        border: 2px solid white;
        cursor: pointer;
    }
`

export const Arrow = styled.img`
  width: 18px;
  height: 18px;
  background-color: rgba(42,42,42,.6);
  border: 2px solid rgba(255,255,255,.5);
  padding: 5px;
  margin-left: 4px;
  border-radius: 50%;
  font-size: 16px;
  &:hover {
    border: 2px solid white;
    cursor: pointer;
}
`



export const Movie = styled.div`
    display: inline-block;
    width: 280px;
    object-fit: cover;
    margin-right: 4px;
    overflow: hidden;
    transition: 0.5s;
    border: 1px solid transparent;
    overflow-y: hidden;

    &:hover{
    border-radius: 5px;
    cursor: pointer;
    transform: scale(1.2);
    z-index: 999;
    transform: 0.5s;
    }

    &:first-child {
      margin-left: 30px;
    }

    &:hover ${MovieInfo}{
      transform: scale(1);
      transition: 0s;
    }

@media(max-width: 768px) {
    margin-right: 2px;
    width: 240px;
}

@media(max-width: 425px) {
  margin-right: .5px;
    width: 210px;
}
`



export const Thumb = styled.img`
      width: 100%;
      height: 160px;
      min-height: 150px;

@media(max-width: 768px) {
  height: 140px;
  min-height: 140px;
}

@media(max-width: 425px) {
  height: 120px;
  min-height: 120px;
}
`



export const Limit = styled.span`
  margin: 0px 5px;
`





export const MovieListingStyle = createGlobalStyle`
@font-face {
  font-family: "Roboto";
  src: url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap)
  format("woff2");
}



body {
  background-color: #111;
  color: #fff;
  margin: 0;
  font-family: "Roboto", sans-serif;  
  
}

@media (max-width: 740px) {
  body {
    margin-top: 51px;
  }
}

.lists {
  margin-top: -150px;
}
.loading {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;



