import styled from 'styled-components/macro';

import { Link } from "react-router-dom";

export const WatchLink = styled(Link)`
    color: #000;
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    display: ${props => (props.modalOpen === false ? "none" : "block")};
    background: rgba(0, 0, 0, 0.8);
    opacity: 1;
    pointer-events: all;
    z-index: 999;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Dialog = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 45%;
    height: auto;
    overflow-y: auto;
    max-width: 100%;
    max-height: 100%;
    z-index: 99;
    pointer-events: all;
    background: #171717;
    border-radius: 10px;

    @media(max-width: 1220px) {
      width: 60%;
    }

    @media(max-width: 768px) {
        width: 70%;
    }

    @media(max-width: 478px) {
        width: 80%;
    }

    &::-webkit-scrollbar {
      display: none;
    }
`

export const CloseButton = styled.img`
    position: absolute;
    top: 2%;
    right: 2%;
    z-index: 1;
    display: inline-flex;
    padding: 8px;
    font-size: 18px;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 5px;
    margin-bottom: 0.8em;
    background: black;
    color: white;
    border: 1px solid white;
    transition: all 0.3s ease-out;
    outline: none;

    &:hover {
      background: white;
      color: black;
    }
`;

export const Content = styled.div``;

export const Hero = styled.div`
    position: relative;
`;

export const HeroShadow = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
    background: linear-gradient(180deg, transparent, rgba(14, 14, 14, 0.6), #171717);
`;

export const MovieThumbnail = styled.img`
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

export const ModalButtons = styled.div`
    position: absolute;
    bottom: 10%;
    left: 2em;
    display: flex;
    align-items: center;

    @media(max-width: 768px) {
        left: 2em;
    }
`;

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.5em 1.5em 3em 1.5em;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 1.5em 1.5em 1em 1.5em;
    }
`;

export const Main = styled.div`
    width: 65%;

    @media(max-width: 768px) {
    width: 100%;
    }
`

export const Secondary = styled.div`
`;

export const Title = styled.h3`
    font-size: 26px;
      line-height: 1.4;
      font-weight: 600;
      margin-bottom: 15px;

      @include mq('sm') {
        font-size: 26px;
      }

    @media(max-width: 478px) {
        font-size: 18px;
    }
`;

export const Overview = styled.p`
    font-size: 16px;
    line-height: 1.6;
    
    @media(max-width: 478px) {
        font-size: 14px;
    }
`;

export const MoreInformation = styled.h4`
    font-size: 16px;
      line-height: 1.4;
      font-weight: 400;
      margin-bottom: 15px;

`;

export const Row = styled.div`
    font-size: 14px;
    word-break: break-all;
`;

export const Line = styled.hr`
    border-color: rgba(121,121,121,0.7);
    margin: 1em 0;
    display: none;
@media(max-width: 768px) {
    display: flex;
}
`;

export const Label = styled.span`
    color: #777;
`;

export const Description = styled.span`
    color: #ddd;
`;

export const MovieLogo = styled.img`
`;

export const Icons = styled.img`
    height: 100%;
    width: 100%;
    margin-right: 10px;
`;

export const ButtonText = styled.span`
`;

export const GlobalButtons = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    -webkit-font-smoothing: antialiased;
    font-size: 20px;
    font-weight: 600;
    padding: .8rem 2rem;
    border-radius: 5px;
    text-decoration: none;
    white-space: nowrap;
    opacity: 1;
    transition: all 0.2 ease;
    margin-right: 1rem;

    &:hover {
        opacity: 0.7;
    }

    @media (max-width: 760px) {
        font-size: 14px;
        padding: .5rem 1.5rem;
    }

    @media(max-width: 478px) {
        font-size: 12px;
        padding: .3rem 1rem;
    }
`;

export const WatchButton = styled(GlobalButtons)`
    background-color: #fff;
    color: #000;
`;

export const Add = styled.img`
    width: 24px;
    height: 24px;
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
    @media(max-width: 478px) {
        width: 18px;
        height: 18px;
    }
`
export const Like = styled.img`
    width: 24px;
    height: 24px;
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

    @media(max-width: 478px) {
        width: 18px;
        height: 18px;
    }
`
export const Dislike = styled.img`
    width: 24px;
    height: 24px;
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
    @media(max-width: 478px) {
        width: 18px;
        height: 18px;
    }
`