import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const ContainerHome = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #011826;
`
const Home = styled.div`
    width: 40vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
    background-color: #012340;

`

const H1 = styled.h1`
    margin: 2px 0 50px 0;
    font-size: 44px;
    color: #A9C6D9;
`

const Botao = styled(Button)`
    ${({ theme }) => `
    cursor: pointer;
    
    &:hover {
        background-color: #3B4B59;
        transform: scale(1.3);
    }
    `}
`


export function HomePage (){

    const history = useHistory();

    const verViagens = () => {
        history.push("/trips/list")
    };

    const irParaLogin = () => {
        history.push("/login")
    };

    return(
       <ContainerHome> 
           <Home>
            
                <H1>Labex</H1>
                
                    <Stack direction="row" spacing={4}>
                        <Botao variant="outlined" onClick={irParaLogin}>Logar</Botao>
                        <Botao variant="outlined" onClick={verViagens}>Ver viagen</Botao>
                    </Stack>
                
            </Home>
        </ContainerHome>
    )
}

export default HomePage;