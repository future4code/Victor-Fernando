import React, { useContext, useEffect } from "react";
import GlobalEstadoContext from "../../global/GlobalEstadoContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_IMG } from "../../constants/urls"
import { CardFilme, GlobalFilme } from "./stayledFilme";

 
export const Filmes = () => {
    const { listaFilmes, setListaFilmes, filmeDetalhe, setFilmeDetalhe } = useContext(GlobalEstadoContext);

    const history = useHistory(); 

    const goDetale = (idFilme) => {
        history.push("/detalhe")

        const filtrarFilme = listaFilmes.find((item) => item.id === idFilme)
        setFilmeDetalhe(filtrarFilme)

    }
     
    const filmes = listaFilmes.length && listaFilmes.map((filme) => {

        return(
            <CardFilme key={filme.id} onClick={() => goDetale(filme.id)}>
                <img src={`${BASE_IMG}${filme?.backdrop_path}`}></img>
                <div className="footerCard">
                    <nav>
                        <div className="linguagem">
                            <p>{filme?.original_language}</p>
                        </div>
                    </nav>
                    
                    <div className="titulo">
                        <p>{filme?.title}</p>
                    </div>
                </div>
            </CardFilme>
        )
    })

    return(
        <GlobalFilme>
            {filmes}
        </GlobalFilme>
    )
}