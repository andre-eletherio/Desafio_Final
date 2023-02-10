import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FilterContainer, Input, Select, SelectContainer } from './StyleFilter'
import {BASE_URL} from "../../constants/BASE_URL"

export default function Filter({setFilter, setSort, setPokemonList, type}) {
    const [pokemonName, setPokemonName] = useState("");

    useEffect(()=> {
        axios.get(
            `${BASE_URL}/?name=${pokemonName}`
        ).then((res)=> setPokemonList(res.data))
    }, [pokemonName])

    const getPokemonName = (e) => {
        setPokemonName(e.target.value);
    }

    const getFilter = (e) => {
        setFilter(e.target.value);
    }

    const getSort = (e) => {
        setSort(e.target.value);
    }

    return (
        <FilterContainer>
            <Input type="text" placeholder='Buscar por nome' onChange={getPokemonName}/>
            <SelectContainer>
                <Select value={type} onChange={getFilter}>
                    <option value="">Tipo</option>
                    <option value="Fire">Fogo</option>
                    <option value="Ice">Gelo</option>
                    <option value="Grass">Grama</option>
                    <option value="Psychic">Psíquico</option>
                    <option value="Water">Água</option>
                    <option value="Bug">Inseto</option>
                    <option value="Electric">Elétrico</option>
                    <option value="Rock">Pedra</option>
                    <option value="Normal">Normal</option>
                    <option value="Ground">Terra</option>
                </Select>
                <Select onChange={getSort}>
                    <option value="">Ordem</option>
                    <option value="cres">Alfabética ⬆️</option>
                    <option value="desc">Alfabética ⬇️</option>
                </Select>
            </SelectContainer>
        </FilterContainer>
    )
}
