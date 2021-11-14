import React from 'react';
import styled from 'styled-components';

const Centraliza = styled.div`
    height: 60px;
    width: 40vw;
    border: 1px solid black;
    display: flex;
    margin: 5px 0px;
    padding: 0 20px;
    align-items: center;
`

const Icones = styled.img`
    height: 30px;
    margin-right: 15px;
    border-radius: 50px;
`

const Endereco = styled.p`
    margin-left: 5px;
`

const CardPequeno = (props) => {
    return (
        <Centraliza> 
            <Icones src={props.icone} />
            <h4> {props.solicitado} </h4>
            <Endereco> {props.endereco} </Endereco>
        </Centraliza>
    )
}

export default CardPequeno;