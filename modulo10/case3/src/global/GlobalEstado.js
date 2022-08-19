import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import GlobalEstadoContext from "./GlobalEstadoContext";

const GlobalState = (props) => {
    
  const [listaLoterias, setListaLoterias] = useState([]);
  const [idLoteria, setIdLoteria] = useState([]);

  const pegaLoterias = () => {

      axios
      .get(`${BASE_URL}/loterias`)
      .then(res => setListaPokemon(res.data))
      .catch(err => alert(err.message))
  }
  

  useEffect(() =>{

    pegaLoterias();
    
      
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
      listaLoterias,
      setListaLoterias,
      idLoteria,
      setIdLoteria
    };
  
    return (
      <GlobalEstadoContext.Provider value={data}>
        {props.children}
      </GlobalEstadoContext.Provider>
    );
  };
  
  export default GlobalState;