import styled, { createGlobalStyle } from "styled-components/macro";


export const MovieIcons = styled.div`
  display: flex;
`;

export const Loading = styled.div`
    background: url("https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png") center center no-repeat;
    background-size: cover;
    width: 8rem;
    height: 8rem;
    animation: loader 1s linear infinite;

  @keyframes loader {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const MovieInfoTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
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

`
export const Title = styled.p`
display:flex;
justify-content: center;
margin-top: 11px;
margin-right: 20px;
font-size: 12px;
font-weight: bold;
color: white;
`

export const DivSubtitle = styled.div`
&:first-child {
  margin-bottom: 20px;
  padding-left: 0;
}
`
export const Subtitle = styled.h2`
margin-left: 40px;
`

export const Arrows = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    width: 40px;
    height: 153px;
    text-align: center;
    align-items: center;
    justify-content: flex-end;
    z-index: 999;
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
    padding: 10px;
    height: 100px;
    width: 100%;
    margin-top:-5px;
    transform: scale(0);
`
export const Play = styled.img`
   background-color: white;
    border: 2px solid white;
    padding: 5px;
    margin-right: 10px;
    border-radius: 50%;
    font-size: 16px;
    
    &:hover{
      background-color: gray;
    border: 2px solid gray;
    cursor: pointer;
    }
`
export const Add = styled.img`
    background-color: rgba(42,42,42,.6);
    border: 2px solid rgba(255,255,255,.5);
    padding: 5px;
    margin-right: 10px;
    border-radius: 50%;
    font-size: 16px;
    &:hover { 
      border: 2px solid white;
    cursor: pointer;
    }
`
export const Like = styled.img`
    background-color: rgba(42,42,42,.6);
    border: 2px solid rgba(255,255,255,.5);
    padding: 5px;
    margin-right: 10px;
    border-radius: 50%;
    font-size: 16px;
    &:hover{
     border: 2px solid white;
    cursor: pointer;
    }
`
export const Deslike = styled.img`
    background-color: rgba(42,42,42,.6);
    border: 2px solid rgba(255,255,255,.5);
    padding: 5px;
    margin-right: 10px;
    border-radius: 50%;
    font-size: 16px;
    &:hover{
        border: 2px solid white;
        cursor: pointer;
    }
`

export const Arrow = styled.img`
        background-color: rgba(42,42,42,.6);
        border: 2px solid rgba(255,255,255,.5);
        padding: 5px;
        margin-right: 10px;
        border-radius: 50%;
        font-size: 16px;
&:hover{
            border: 2px solid white;
            cursor: pointer;
}
`



export const Movie = styled.div`
   display: inline-block;
    width: 250px;
    margin-right: 10px;
    border-radius: 3px;
    overflow: hidden;
    transition: 0.5s;
    border: 1px solid transparent;
    overflow-y: hidden;

    &:hover{
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

`



export const Thumb = styled.img`
      width: 100%;
      height: 150px;
      min-height: 150px;
`



export const Limit = styled.span`
margin:0px 5px;
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
    margin-top: 0px;
  }
}

@media(max-width: 425px) {
  body {
    margin-top: 20px;
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

