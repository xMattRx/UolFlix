import styled from 'styled-components/macro';

export const CarouselStyled = styled.div`

width: 100%;
height: 700px;
background: black;

`;

export const CarouselInner = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: ${props => props.sections * 1500}px;
    //1500
    
    margin-left: ${props => props.scrollX}px;
    transition: all ease 1s;
`

export const GlobalRow = styled.div`
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;

    &:hover {
        opacity: 1;
    }

    @media (max-width: 760px) {
        opacity: 1;
    }
`;

export const LeftRow = styled(GlobalRow)`
    left: 0;
    margin-top: 180px;
`;

export const RightRow = styled(GlobalRow)`
    right: 0;
    margin-top: 180px;
`;