import styled, { keyframes } from "styled-components";
import grass_background from "./assets/img/grass_background.png"
import backgroundMobile from "./assets/img/background_mobile.png"

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    background-image: url(${grass_background});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 400px) {
        background-image: url(${backgroundMobile});
    }
`;

export const Logo = styled.img`
    width: 300px;
`;

export const PokemonsContainer = styled.div`
    width: 100%;
    height: 50vh;
    position: absolute;
    bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    padding: 0 100px;

    @media (max-width: 1100px){
        gap: 20px;
        padding: 0 20px;
    }
`;

const jumpAnimation = keyframes`
    0%{ transform: translateY(0) scale(2); }
    50%  { transform: translateY(-40px) scale(2); }
    100% { transform: translateY(0) scale(2); }
`;

const jumpAnimationMobile = keyframes`
    0%{ transform: translateY(0) scale(1.4); }
    50%  { transform: translateY(-40px) scale(1.4); }
    100% { transform: translateY(0) scale(1.4); }
`;

export const ImgPokemon = styled.img`
    transform: scale(1.7);

    
    :hover {
        animation-name: ${jumpAnimation};
        animation-duration: .5s;
        animation-iteration-count: 1;
        cursor: pointer;
    }
    @media (max-width: 1100px){
        transform: scale(1.2);

        :hover{
            animation-name: ${jumpAnimationMobile};
        }
    }

    @media (max-width: 400px) {
        max-width: 100px;
    }
`;

