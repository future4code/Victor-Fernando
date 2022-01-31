import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useHistory } from 'react-router-dom';
import {paises} from '../../constantes/paises'


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
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

const ContainerFromPage = styled.div`
    padding: 0;
    margin: 0;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #011826;
`

const From = styled.div`
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

    input{
        margin: 8px 0;
        height: 5.4vh;
        border-radius: 10px;
        padding: 0 8px;
    }

    select{
        margin: 8px 0;
        height: 5.4vh;
        border-radius: 10px;
        padding: 0 8px;
    }
`
const H1 = styled.h1`
    font-size: 44px;
    color: #A9C6D9;
`



export function ApplicationFormPage (){

    const history = useHistory()
    const [nome, setNome] = useState([])
    const { form, setForm } = useState({ name: "", age: "", applicationText: "", profession: "", country: "" })

    const irListPage = () => {
        history.push( "/trips/list" )
    }


    useEffect(() => {

        nomeDaViagens();
      
    },[]);

    const nomeDaViagens = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-joy/trips")
        .then(res =>{
            setNome(res.data.trips)
            console.log("Deu certo")
        }).catch((err) =>{console.log(err)})
    }

    console.log(nome)

    const listarNome = nome.map((item)=> {
        return <option key={item.id} value={item.id}>{item.name}</option>
    })


    return(
        <ContainerFromPage>

            <H1>Inscreva-se para uma viagem</H1>
            <from>
                <From>
                    
                        <select>
                            <option value="" >Escolha uma Viagem</option>
                            {listarNome}
                        </select>
                        <input
                            placeholder={"Nome"}
                            name={"name"}
                            // value={}
                            // onChange={}
                            pattern={"^.{3,}$"}
                            title={"O nome deve ter no mínimo 3 caracteres"}
                            required
                        />
                        <input
                            placeholder={"Idade"}
                            type={"number"}
                            name={"age"}
                            // value={}
                            // onChange={}
                            required
                            min={18}
                        />
                        <input
                            placeholder={"Texto de Candidatura"}
                            name={"applicationText"}
                            // value={}
                            // onChange={}
                            required
                            pattern={"^.{30,}$"}
                            title={"O texto deve ter no mínimo 30 caracteres"}
                        />
                        <input
                            placeholder={"Profissão"}
                            name={"profession"}
                            // value={}
                            // onChange={}
                            required
                            pattern={"^.{10,}$"}
                            title={"A profissão deve ter no mínimo 10 caracteres"}
                        />
                        <select
                            placeholder={"País"}
                            name={"country"}
                            // value={form.country}
                            // onChange={onChange}
                            required
                        >
                            <option value={""} >Escolha um País</option>
                            {paises.map((pais) => {
                                return <option value={pais} key={pais}>{pais}</option>
                            })}
                        </select>
                        <div>
                            {/* <button onClick={() => goToListTripsPage(history)}>Voltar</button> */}
                            
                            <ConatineBotao direction="row" spacing={5}>
                                <Botao onClick={irListPage} variant="outlined">Voltar</Botao>
                                <Botao type={"submit"} variant="outlined">Inscrever-se</Botao>
                            </ConatineBotao>
                        </div>
                    </From>
            </from>
        </ContainerFromPage>
    )
}

export default ApplicationFormPage;