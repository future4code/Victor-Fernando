import styled from "styled-components"

export const Selecao = styled.div`
    height: 100%;
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const Sorteio = styled.div`
    height: 100%;
    width: 1000px;
    display: flex;
    flex-direction: row;

    .radius{
        background-color: #efefef;
        height: 100%;
        width: 10vw;
        border-bottom-left-radius: 100%;
        border-top-left-radius: 100%;

    }

    .container{
        background-color: #efefef;
        height: 100%;
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .P{
            
        }

        .containerNum{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            /* margin: 36vh 0 30vh 3vw; */
            /* margin-bottom: 30vh; */
            flex-wrap: wrap;
            width: 60%;
            /* height: 10vw; */

            .numeros{
                background-color: white;
                height: 50px;
                width: 50px;
                border-radius: 50%;
                margin-left: 6px;
                margin-bottom: 4px;
                display: flex;
                align-items: center;
                justify-content: center;

            }
        }

        
    }
`


export const Global = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    display: flex;

    .corFundoPadrao {
        background: #0155bc;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .corFundoMega {
        background: #6befa3!important;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .corFundoQuina{
        background: #8666ef!important;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .corFundoLotoFacil {
        background: #dd7ac6!important;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .corFundoLotoMania {
        background: #ffab64!important;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .corFundoTimeMania {
        background: #5aad7d!important;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .corFundoSorte {
        background: #bfaf83!important;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

`