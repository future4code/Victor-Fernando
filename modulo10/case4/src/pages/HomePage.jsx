import React, { useContext } from "react";
import GlobalEstadoContext from "../global/GlobalEstadoContext";
import { useHistory } from "react-router-dom";
import { Header } from "../componentes/header"
import { Filmes } from "../componentes/filme/filmes"
import styled from "styled-components";

const Global = styled.div`
    display: flex;
    flex-direction: column;
`


const HomePage = () => {

    const { listaFilmes } = useContext( GlobalEstadoContext );

    const history = useHistory();



    return(
        <Global>
            <Header/>
            <Filmes/>
        </Global>
    );
    
} 

export default HomePage;

