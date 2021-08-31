import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;

    @media (max-width: 375px) {
        padding: 70px 20px;
    }
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 50px;
    color: white;
    padding-bottom: 4vh;

    @media screen and (max-width: 1000px) {
        font-size:180%;
        width:100%;
    }
`;