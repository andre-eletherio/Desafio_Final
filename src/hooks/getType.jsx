import fireCard from "../assets/img/fire_card.png"
import grassCard from "../assets/img/grass_card.png"
import waterCard from "../assets/img/water_card.png"
import eletricCard from "../assets/img/eletric_card.png"
import psychicCard from "../assets/img/psychic_card.png"
import groundCard from "../assets/img/ground_card.png"
import iceCard from "../assets/img/ice_card.png"
import bugCard from "../assets/img/bug_card.png"
import rockCard from "../assets/img/rock_card.png"
import normalCard from "../assets/img/normal_card.png"


export const getType = (type) => {

    switch (type){
        case "Fire":
            return fireCard;
        case "Electric":
            return eletricCard;
        case "Psychic":
            return psychicCard;
        case "Water":
            return waterCard;
        case "Ice":
            return iceCard;
        case "Grass":
            return grassCard;
        case "Bug":
            return bugCard;
        case "Ground":
            return groundCard;
        case "Rock":
            return rockCard;
        case "Normal":
            return normalCard;
        default:
            return fireCard;
    }
}