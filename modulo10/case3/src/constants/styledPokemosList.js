import styled from "styled-components";

export const CardList = styled.div`
    height: 35vh;
    width: 250px;
    margin: 10px;
    display: grid;
    grid-template-rows: 84% 10%;
    margin-bottom: 18px;
    box-shadow: 2px 2px 2px 2px rgba(50, 50, 50, 0.77);
` 
export const Botoes = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    button{
        cursor: pointer;
        background-color: #F21905;

        
    }
    button:hover{
        background-color: #7ED0D9;
        box-shadow: 3px 3px 3px 3px rgba(50, 50, 50, 0.77);
    }
`

export const ImgContainer = styled.div`
    background: #7ED0D9;
    display: flex;
    justify-content: center;
    align-items: center;
` 

export const Img = styled.img`
    height: 60%;
`

export const ContainerLista = styled.div`
    width: 90vw;
    height: 92vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 10px 46px;
    
`

export const Header = styled.div`
    height: 14vh;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    /* position: relative; */
`
export const BotaoHeader = styled.button`
    position: absolute;
    left: 76px;
    cursor: pointer;
    background-color: #F21905;
    border-radius: 7px;
    height: 30px;

    :hover{
        background-color: #7ED0D9;
        box-shadow: 2px 2px 2px 2px rgba(50, 50, 50, 0.77);
    }
`
export const ContainerDetails = styled.div`
    height: 84vh;
    margin: 0 20px;
    display: grid;
    grid-template-columns: 18vw 20vw 26vw;
    align-items: center;
    justify-content: center;
    gap: 30px;
`

export const ContainerImg = styled.div`
    display: grid;
    gap: 59px;
    
`

export const ImgPoke = styled.img`
    height: 29vh;
    background-color: #7ED0D9;
    
`

export const Stats = styled.div`
    height: 75%;
    background-color: #7ED0D9;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;

`

export const H2 = styled.h2`
    align-self: center;

`
export const Tipo = styled.div`
    background-color: #7ED0D9;
    height: 12vh;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const Ataques = styled.div`
    height: 54vh;
    background-color: #7ED0D9;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
`