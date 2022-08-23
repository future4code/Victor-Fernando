import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import GlobalEstadoContext from "./GlobalEstadoContext";

const GlobalState = (props) => {
    
  const [listaLoterias, setListaLoterias] = useState([]);
  const [idLoteria, setIdLoteria] = useState([]);
  const [concursos, setConcursos] = useState([]);
  const [numLoteria, setNumLoteria] = useState([]);
  const [corFundo, setCorFundo] = useState([]);
  const [sorteio, setSorteio] = useState([]);

  const pegaLoterias = () => {

      axios
      .get(`${BASE_URL}/loterias`)
      .then(res => setListaLoterias(res.data))
      .catch(err => alert(err.message))
  }
  

  useEffect(() =>{

    pegaLoterias();
    // idLoteria([]); 
    console.log("loterias", listaLoterias)
      
  },[])

  

  useEffect(() =>{
    
    axios
    .get(`${BASE_URL}/loterias-concursos`) 
    .then((res) => {
        setConcursos(res.data);
    })  
    .catch(err => alert(err.message))
    console.log("idLoterias", concursos)

    
      
  },[idLoteria])

  const filterConcurso = () => {
    const getId = concursos?.find((item)=> {
        return item.loteriaId == idLoteria
        
    })
    
    setNumLoteria(getId)
    console.log("iiii", getId)
    
  }
  useEffect(() => {
      filterConcurso() 
      
  },[concursos]);

  useEffect(() => {
    axios
    .get(`${BASE_URL}/concursos/${numLoteria?.concursoId}`)
    .then((res) => {
      setSorteio(res.data);
      console.log("ssss", sorteio)
    })  
    .catch(err => alert(err.message))
    
    
  },[numLoteria]);

  

  


    // console.log("lista pokemon", listaPokemon)
    // console.log(pokemons)
  
    const data = {
      listaLoterias,
      setListaLoterias,
      idLoteria,
      setIdLoteria,
      numLoteria,
      setNumLoteria,
      corFundo, 
      setCorFundo,
      sorteio

    };
  
    return (
      <GlobalEstadoContext.Provider value={data}>
        {props.children}
      </GlobalEstadoContext.Provider>
    );
  };
  
  export default GlobalState;