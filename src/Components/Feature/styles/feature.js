import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #222;
    text-align: center;
    padding: 165px 45px 300px 45px;
`;

export const Title = styled.h1`
    color: white;
    max-width: 640px;
    font-size: 65px;
    font-weight: bold;
    margin: auto;

    @media(max-width: 600px) {
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    color: white;
    max-width: 640px;
    font-size: 26px;
    font-weight: normal;
    margin: auto;
    padding-top: 20px;

    @media(max-width: 600px) {
        font-size: 18px;
    }
`;