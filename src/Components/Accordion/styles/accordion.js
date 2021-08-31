import styled from 'styled-components/macro';

export const Box = styled.section`
    width: 100%;

    @media screen and (max-width: 1000px) {
        padding: 0;
        width: 100%;
        margin: 0;
    }

    img {
        width: 24px;
        
        @media (max-width: 600px) {
            width: 16px;
        }
    }

    .accordion {
        box-sizing: border-box;
        color: white;
        font-size: 26px;
        font-weight: 400;

        @media screen and (max-width: 600px) {
            font-size: 16px;
            width: 100%;
        }
        @media screen and (max-width: 400px) {
            width: 100%;
        }
    }

    .container {
        width: 100%;
        margin: auto;
        background: #303030;
    }

    .accordionHeading {
        display: flex;
        background: #303030;
        padding: 26px 30px;
        align-items: center;
        cursor: pointer;
        margin-top: 8px;
        margin-bottom: 1.2px;

        p {
            align-items: center;
            letter-spacing: 1.2px;
            font-weight: normal;
        }

        .container {
            display: flex;
            align-items: center;
            align-content: center;
            justify-content: space-between;
        }

        span {
            cursor: pointer;
        }

        @media screen and (max-width: 600px) {
            padding: 22px 24px;
            font-size: 16px;
        }
    }

    .accordionContent{ 
        height: 0;
        opacity: 0;
        overflow: hidden;

        .show {
            height: 180px;
            opacity:1;
            padding: 30px;
        }
    }

    .showaccordionContent p {
        font-size: 26px;
        line-height: normal;
        padding: 20px;
        text-align: left;

        @media screen and (max-width: 600px) {
            font-size: 16px;
            letter-spacing: 1px;
        }
    }
`;