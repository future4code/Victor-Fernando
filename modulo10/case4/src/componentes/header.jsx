import React from 'react';
import styled from "styled-components";
import logo from "../img/logo.png";

const Heade = styled.div`
    width: 100%;
    height: 26vh;
    background-color: #34a5ed;
    box-shadow: 0px 3px 0px #dfdfdf;
`

const Logo = styled.div`
    width: 100%;
    height: 6vh;
    background-color: #0277c0;
    box-shadow: 0px 3px 0px #1a99e7;
    display: flex;
    flex-direction: row;

    img{
        height: 100%;
        margin-left: 2vw;
    }

    p{
        align-self: center;
        margin-left: 40%;
        font-family: Verdana, sans-serif;
        font-weight: bold;
        color: white;
    }
`

export const Header = () => {

    return(
        <Heade>
            <Logo>
                <img src={logo}></img>
                <p>Filmes.com</p>
            </Logo>
        </Heade>
    )
}