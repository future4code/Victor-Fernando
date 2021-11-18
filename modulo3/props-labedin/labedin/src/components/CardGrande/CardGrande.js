import React from 'react';
import './CardGrande.css'
import styled from 'styled-components'

const BigcardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const BigcardImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const H4 = styled.h4`
    margin-bottom: 15px;
`

const BigcardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <BigcardContainer>
            <BigcardImg src={ props.imagem } />
            <BigcardDiv>
                <H4>{ props.nome }</H4>
                <p>{ props.descricao }</p>
            </BigcardDiv>
        </BigcardContainer>
    )
}

export default CardGrande;