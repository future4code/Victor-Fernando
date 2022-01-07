import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import PokeCard from "./components/PokeCard";

const ContainPokemon = styled.div`
  font-family: sans-serif;
  text-align: center;
  margin-top: 100px;
`

export function App(props) {

  const [pokeName, setpokeName] = useState("");
  const [pokeList, setPokelist] = useState([]);

  
  useEffect(() => {
    
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        
        setPokelist(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changePokeName = (event) => {
    setpokeName(event.target.value);
  };

  return (
    <ContainPokemon>
      
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      
      {pokeName && <PokeCard pokemon={pokeName} />}
    </ContainPokemon>
  );
}

export default App;
