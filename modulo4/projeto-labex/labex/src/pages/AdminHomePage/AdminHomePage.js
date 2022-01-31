import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useState, useEffect } from "react";

const Botao = styled(Button)`
    ${({ theme }) => `
    cursor: pointer;
    
    &:hover {
        background-color: #3B4B59;
        transform: scale(1.3);
    }
    `}
    
`

const ConatineBotao = styled(Stack)`
    margin-bottom: 20px;
`

const ContaineList = styled.div`
    background-color: #011826;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    
`

const CardViagem = styled.div`
    width: 34vw;
    height: 100px;
    background-color: #012340;
    color: #A9C6D9;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    padding: 0 10px;

    &:hover{
        cursor: pointer;
        background-color: #A9C6D9;
        color: #012340;
    }

    button{
        color: #011826;

        &:hover {
            cursor: pointer;
            background-color: #012340;
            color: #A9C6D9;

        }
    }
`

const H1 = styled.h1`
    font-size: 44px;
    color: #A9C6D9;
`

export function AdminHomePage (){

    const history = useHistory()

    const [lista, setLista] = useState([])

    const irParaHome = () => {
        history.push("/")
    }

    useEffect(() => {

      axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-joy/trips")
        .then(res =>{
            setLista(res.data.trips)
            console.log(res.data.trips)
        }).catch((err) =>{})

      
    },[]);

    
    const listaMapeada = lista.map((viagem) => {
        return(
            <CardViagem key={viagem.id}>

                <p><strong>Nome:</strong> {viagem.name} </p>
                
                <button>Deletar</button>

            </CardViagem>
        )
    })


    return(
        <ContaineList>
            <H1>Painel Administrativo</H1>

            <ConatineBotao direction="row" spacing={5}>
                <Botao onClick={irParaHome} variant="outlined">Voltar</Botao>
                <Botao variant="outlined">Criar Viagem</Botao>
                <Botao variant="outlined">Logout</Botao>
            </ConatineBotao>

            {listaMapeada}


        </ContaineList>
    )
}

export default AdminHomePage;