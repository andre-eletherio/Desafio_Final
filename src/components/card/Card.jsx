import React from 'react'
import { CardContainer, ImgPokemon, Name, BackgruondPokemon, CloseCard } from "./StyleCard.jsx"
import { getType } from '../../hooks/getType.jsx'

export default function Card({ pokemon, closeCard }) {

  const typeBackground = getType(pokemon.category);

  return (
    <CloseCard onClick={closeCard}>
      <CardContainer style={{ backgroundImage: `url(${typeBackground})` }}>
        <Name>{pokemon.name}</Name>
        <BackgruondPokemon style={{ backgroundImage: `url(${pokemon.background_image_url})` }}>
          <ImgPokemon src={pokemon.image_url} alt={`Imagem ${pokemon.name}`} />
        </BackgruondPokemon>
      </CardContainer>
    </CloseCard>
  )
}
