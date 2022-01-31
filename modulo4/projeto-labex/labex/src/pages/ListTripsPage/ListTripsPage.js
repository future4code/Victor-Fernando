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
const ContaineList = styled.div`
    background-color: #011826;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
`

const CardViagem = styled.div`
    width: 34vw;
    height: 220px;
    background-color: #012340;
    color: #A9C6D9;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
    padding: 0 16px;
`

const H1 = styled.h1`
    font-size: 44px;
    color: #A9C6D9;
`

export function ListTripsPage (props){

    const history = useHistory()

    const [lista, setLista] = useState([])

    const irParaHome = () => {
        history.push("/")
    }

    const inscrever = () => {
        history.push("/trips/application")
    }

    useEffect(() => {

        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-joy/trips")
        .then(res =>{
            setLista(res.data.trips)
            console.log(res.data.trips)
        }).catch((err) =>{})
      
    },[]);




    console.log(lista)

    const listaMapeada = lista.map((viagem) => {
        return(
            <CardViagem key={viagem.id}>
                <div>
                    <p><strong>Nome:</strong> {viagem.name} </p>
                    <p><strong>Descrição:</strong> {viagem.description}</p>
                    <p><strong>Planeta:</strong> {viagem.planet}</p>
                    <p><strong>Duração(dias):</strong>  {viagem.durationInDays}</p>
                    <p><strong>Data:</strong> {viagem.date} </p>
                </div>
            </CardViagem>
        )
    })


    
    

    return(
        <ContaineList>
           
                <Stack direction="row" spacing={5}>
                    <Botao onClick={irParaHome} variant="outlined">Voltar</Botao>
                    <Botao onClick={inscrever} variant="outlined">Inscrever-se</Botao>
                </Stack>

                <H1> Lista de Viagens </H1>

                {listaMapeada}
              
        </ContaineList>
    )
}

export default ListTripsPage;