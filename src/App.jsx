import { useState } from "react";
import pokemonLogo from "./assets/img/pokemon_logo.png"
import { ImgPokemon, Logo, PokemonsContainer, Section } from "./StyleApp";
import Card from "./components/card/Card";
import Filter from "./components/filters/Filter";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [showCard, setShowCard] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const closeCard = () => {
    setShowCard(false);
    setSelectedPokemon("");
  }

  // reenderiza, filtra e ordena a lista de pokemons
  const renderPokemon = pokemonList
  .filter((pokemon)=> pokemon.category.includes(filter))
  .filter((pokemon)=> pokemon.name != selectedPokemon.name)
  .sort((a, b)=> {
    switch (sort) {
      case "asc":
        return a.name.localeCompare(b.name)
      case "desc":
        return b.name.localeCompare(a.name)
      default:
        return
    }
  })
  .map((pokemon) => <ImgPokemon key={pokemon.name} onClick={() => {
    setShowCard(true)
    setSelectedPokemon(pokemon)
  }} src={pokemon.image_url} alt={`Imagem ${pokemon.name}`} />)

  

  return (
    <Section>
      <Logo src={pokemonLogo} alt="" />
      {!showCard && <Filter setFilter={setFilter} setSort={setSort} setPokemonList={setPokemonList} type={filter}/>}
      {showCard && <Card pokemon={selectedPokemon} closeCard={closeCard}/>}
      <PokemonsContainer>
        {renderPokemon}
      </PokemonsContainer>
    </Section>
  );
}

export default App;