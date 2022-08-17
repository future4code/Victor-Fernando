import styled from "styled-components";

export const CardList = styled.div`
    height: 18vh;
    width: 420px;
    margin: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 18px;
    box-shadow: 2px 2px 2px 2px rgba(50, 50, 50, 0.77);

    .Descricao{
        margin-left: 14px;
    }
`

export const GlobalCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 13vh;
`

export const SaborPreco = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* margin-bottom: 18px; */

    p{
        margin-right: 14px;
    }
`

export const BotaoAdiciona = styled.button`
    margin-top: 14px;

`

export const IntCard = styled.div`
    flex-direction: column;
    justify-content: end;
    align-items: center;
    margin-right: 2px;
`


