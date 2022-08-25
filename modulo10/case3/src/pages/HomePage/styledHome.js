import styled from "styled-components"

export const Selecao = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 2fr 2fr;
    justify-content: center;
    align-items: center;

    @media(max-width: 900px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 50%;
    }

    .data1{
        justify-self: center;
        @media(max-width: 900px) {
            display: none;
        }
    }
    .data2{
        display: none;
        @media(max-width: 900px) {
            display: block;
        }
    }
    .select{
        justify-self: center;
    }

`

export const Sorteio = styled.div`
    height: 100%;
    /* width: 1000px; */
    display: flex;
    flex-direction: row;

    @media(max-width: 900px) {
            display: flex;
            flex-direction: column;
    }
    .radius{
        background-color: #efefef;
        height: 100%;
        width: 10vw;
        border-bottom-left-radius: 100%;
        border-top-left-radius: 100%;
        @media(max-width: 900px) {
            border-bottom-left-radius: 0;
            border-top-right-radius: 100%;
            border-top-left-radius: 100%;
            height: 10vw;
            width: 100%;
        }

    }

    .container{
        background-color: #efefef;
        height: 100%;
        width: 90%;
        display: grid;
        grid-template-rows: 1fr 8vh;
        justify-content: center;
        align-items: center;
        @media(max-width: 900px) {
            height: 100%;
            width: 100%;
        }

        .P{
            align-self: flex-end;
            @media(max-width: 900px) {
                margin: 0 2vh 0 4vh;
            }
        }

        .containerNum{
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            justify-self: flex-start;
            width: 60%;
            @media(max-width: 900px) {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                justify-self: center;
            }

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
        display: grid;
        grid-template-columns: 30vw 1fr;

        @media(max-width: 900px) {
            display: flex;
            flex-direction: column;
        }
    }

    .corFundoMega {
        background: #6befa3;
        width: 100%;
        display: grid;
        grid-template-columns: 30vw 1fr;
        @media(max-width: 900px) {
            display: flex;
            flex-direction: column;
        }
    }

    .corFundoQuina{
        background: #8666ef;
        width: 100%;
        display: grid;
        grid-template-columns: 30vw 1fr;
        @media(max-width: 900px) {
            display: flex;
            flex-direction: column;
        }
    }

    .corFundoLotoFacil {
        background: #dd7ac6;
        width: 100%;
        display: grid;
        grid-template-columns: 30vw 1fr;
        @media(max-width: 900px) {
            display: flex;
            flex-direction: column;
        }
    }

    .corFundoLotoMania {
        background: #ffab64;
        width: 100%;
        display: grid;
        grid-template-columns: 30vw 1fr;
        @media(max-width: 900px) {
            display: flex;
            flex-direction: column;
        }
    }

    .corFundoTimeMania {
        background: #5aad7d;
        width: 100%;
        display: grid;
        grid-template-columns: 30vw 1fr;
        @media(max-width: 900px) {
            display: flex;
            flex-direction: column;
        }
    }

    .corFundoSorte {
        background: #bfaf83;
        width: 100%;
        display: grid;
        grid-template-columns: 30vw 1fr;
        @media(max-width: 900px) {
            display: flex;
            flex-direction: column;
        }
    }

    
`