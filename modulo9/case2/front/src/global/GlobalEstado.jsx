import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import GlobalEstadoContext from "./GlobalEstadoContext";

const GlobalState = (props) => {
    
  const [listaPizzas, setListaPizzas] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokeDetails, setPokeDetails] = useState([]);

  const pegaPizzas = () => {

      axios
      .get(`${BASE_URL}/api/pizzas`)
      .then(res => setListaPizzas(res.data.cardapio))
      .catch(err => alert(err.message))
  }
  

  useEffect(() =>{

    pegaPizzas();

      
  },[])

  // useEffect(() =>{

  //   const novaLista = []
  //   for (let item of listaPokemon){
  //       axios
  //       .get(`${item.url}`) 
  //       .then((res) => {
  //           novaLista.push(res.data);
  //           if(novaLista.length === 20){
  //               const ordenarLista = novaLista.sort((a, b) => {
  //                   return a.id - b.id;
  //                 });  
  //               setPokemons(ordenarLista);
  //           }
            
  //       })  
  //       .catch(err => alert(err.message))
        
  //   }

      
  // },[listaPokemon])

    

    // console.log("lista pokemon", listaPokemon)
    // console.log(pokemons)
  
    const data = {
      listaPizzas,
      setListaPizzas,
      pokedex,
      setPokedex,
      pokeDetails, 
      setPokeDetails
    };
  
    return (
      <GlobalEstadoContext.Provider value={data}>
        {props.children}
      </GlobalEstadoContext.Provider>
    );
  };
  
  export default GlobalState;