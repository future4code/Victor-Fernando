import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalEstadoContext from "./GlobalEstadoContext";
import { BASE_URL } from "../constants/urls";

const GlobalState = (props) => {
    
  const [listaFilmes, setListaFilmes] = useState([]); 
  const [filmeDetalhe, setFilmeDetalhe] = useState([]);
  

  useEffect(() =>{  
 
    axios
    .get(`${BASE_URL}`)
    .then(res => setListaFilmes(res.data.results))
    .catch(err => console.error(err)) 
    console.log(listaFilmes) 
 
  },[filmeDetalhe])
  
  const data = {
    listaFilmes,
    setListaFilmes,
    filmeDetalhe, 
    setFilmeDetalhe
  };
  
    return (
      <GlobalEstadoContext.Provider value={data}>
        {props.children}
      </GlobalEstadoContext.Provider>
    );
  };
  
  export default GlobalState;