import styled from "styled-components";

export const CloseCard = styled.div`
    // fundo selecionável para fechar o card
    width: 100%;
    height: 100vh;
    position: absolute;
`;

export const CardContainer = styled.div`
    width: 358.2px;
    height: 498px;
    position: absolute;
    top: 40%;
    left: 50%;
    background-position: center;
    background-size: cover;
    transform: translateX(-179.1px) translateY(-249px);
    border-radius: 20px;
    box-shadow: 0px 1px 20px #000;

    @media (max-width: 700px) {
        width: 250.74px;
        height: 348.6px;
        transform: translateX(-125.37px) translateY(-174.3px);
        top: 32%;
    }
`;

export const Name = styled.p`
    position: absolute;
    top: 22px;
    left: 75px;

    @media (max-width: 700px){
        font-size: 70%;
        top: 17px;
        left: 55px;
    }
`;

export const BackgruondPokemon = styled.div`
    width: 300px;
    height: 186px;
    position: absolute;
    top: 50px;
    left: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 700px){
        width: 210px;
        height: 128px;
        top: 35px;
        left: 21px;
    }
`;

export const ImgPokemon = styled.img`
    height: 90%;
`;