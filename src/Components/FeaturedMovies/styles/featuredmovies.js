import styled from 'styled-components/macro';

export const Container = styled.div`
    height: 80vh;


`;

export const Section = styled.section`
    height: 100vh;
    padding-top:120px;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(0deg, rgba(17,17,17,1) 0%, rgba(255,255,255,0) 48%, rgba(255,255,255,0) 100%), url(${props => props.image});

    @media (max-width: 760px) {
        height: 90vh;
    }
    @media(max-width: 425px) {
        margin-top: 31px;
    }
`;
export const FeaturedVertical = styled.div`
    margin-top: 30px;
    width: inherit;
    height: inherit;
    
`;

export const FeaturedHorizontal = styled.div`
    width: inherit;
    height: inherit;
    //background: linear-gradient(to right, #111 30%, transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 0 3%;
    padding-bottom: 350px;
    
`;

export const FeaturedName = styled.div`
    font-size: 60px;
    font-weight: bold;

    @media (max-width: 760px) {
        font-size: 40px;
    }
`;

export const FeaturedTrailer = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin: 1vw 0 .5vw 0;
`;

export const FeaturedInfo = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 1vw;
    margin-bottom: .5vw;

    @media (max-width: 760px) {
        font-size: 16px;
    }
`;

export const Info = styled.div`
    display: inline-block;
    margin-right: 15px;
`;

export const FeaturedPoints = styled(Info)`
    color: #46d369;
`;

export const FeaturedYear = styled(Info)``;

export const FeaturedSeasons = styled(Info)``;

export const FeaturedDescription = styled.div`
    margin-top: 1.5vw;
    //font-size: 20px;
    //color: #999;
    max-width: 40%;
    text-align: left;
    color: #fff;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    font-size: 1.4vw;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
    margin-top: .1vw;

    @media (max-width: 760px) {
        font-size: 14px;
        max-width: 100%;
        margin-right: 30px;
    }
    @media (max-width: 425px) {
        display: none;
    }
`;

export const Icons = styled.img`
    height: 100%;
    width: 100%;
    margin-right: 10px;
`;

export const FeaturedButtons = styled.div`
    margin-top: 15px;
`;

export const Limit = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 100%;
    position: relative;
    width: 1rem;
`;

export const MovieLogo = styled.img`
`;

export const GlobalButtons = styled.a`
    display: inline-flex;
    align-items: center;
    -webkit-font-smoothing: antialiased;
    font-size: 20px;
    font-weight: 600;
    padding: 1rem 2rem;
    border-radius: 5px;
    text-decoration: none;
    white-space: nowrap;
    opacity: 1;
    transition: all 0.2 ease;
    margin-right: 1rem;
    margin-bottom: 1rem;

    &:hover {
        opacity: 0.7;
    }

    @media (max-width: 760px) {
        font-size: 14px;
    }
`;

export const ButtonText = styled.span`
`;

export const WatchButton = styled(GlobalButtons)`
    background-color: #fff;
    color: #000;
`;

export const MyListButton = styled(GlobalButtons)`
    background-color: rgba(109, 109, 110, 0.7);
    color: #fff;
`;

export const FeaturedGenres = styled.div`
    margin-top: 15px;
    font-size: 18px;
    color: #999;

    @media (max-width: 760px) {
        font-size: 14px;
    }
`;