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

const ContaineLogin = styled.div`
    height: 100vh;
    background-color: #011826;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

const CardLogin = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    input{
        margin: 8px 0;
        height: 5.4vh;
        width: 34vw;
        border-radius: 10px;
        padding: 0 8px;
    }
`

const H1 = styled.h1`
    font-size: 44px;
    color: #A9C6D9;
`

export function LoginPage (){

    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const irParaHome = () => {
        history.push("/")
    }


    const onChangeEmail = ({target}) => {
        setEmail(target.value)
    }

    const onChangePassword = ({target}) => {
        setPassword(target.value)
    }

    const submitLogin = () => {
        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-joy/login", {
            email,
            password
        }).then(({ data })=>{
            localStorage.setItem("token", data.token)
            console.log(data)
        }).catch(res => console.log(res))

        history.push("/admin/trips/list")
    }

    return(
        <ContaineLogin>

            <H1>Login</H1>

            <CardLogin>
                <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChangeEmail}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={onChangePassword}
                />
            </CardLogin>

            <Stack direction="row" spacing={5}>
                <Botao onClick={irParaHome} variant="outlined">Voltar</Botao>
                <Botao onClick={submitLogin} variant="outlined">Logar</Botao>
            </Stack>
        </ContaineLogin>
    )
}