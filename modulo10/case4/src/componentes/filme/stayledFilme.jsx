import styled from "styled-components"

export const GlobalFilme = styled.div`
    padding: 6vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    
`

export const CardFilme = styled.button`
    width: 24vw;
    height: 56vh;
    margin: 0 4vh 2vh 4vh;
    border: none;
    display: grid;
    grid-template-rows: 1fr 12vh;
    align-items: center;
    border-radius: 2vh;
    box-shadow: 2px 2px 2px #888888;

    @media(max-width: 740px) {
        width: 54vw;
        height: 56vh;
    }

    img{
        height: 100%;
        width: 100%;
        border-radius: 2vh;
    }

    nav{
        height: 3vh;
        align-self: start;
        justify-self: start;
    }

    .footerCard{
        display: grid;
        grid-template-rows: 3vh 8vh;
        /* justify-content: center;
        align-items: center; */
        /* background-color: black;  */

        .linguagem{
            height: 20px;
            width: 54px;
            /* margin-left: 2vh; */
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: red;

            p{
                font-size: 10px;
                font-weight: bold;
            }
        }

        .titulo{
            justify-self: center;
            align-self: center;

            p{
                font-size: 2vh;
                font-weight: bold;
            }
        }
    }
`