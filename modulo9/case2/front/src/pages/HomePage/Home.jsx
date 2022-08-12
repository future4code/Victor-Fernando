import React, { useState, useEffect, useContext } from "react";
import GlobalEstadoContext from "../../global/GlobalEstadoContext"
import { CardList, GlobalCard, SaborPreco, BotaoAdiciona, IntCard } from "./styledHome";


const Home = () => {


    const [form, setForm] = useState("")

    const onChange = (event) => {
        setForm({[event.target.name]: event.target.value})
    }
    console.log(setForm)


    const { listaPizzas } = useContext(GlobalEstadoContext)

    const mapearPizzas = listaPizzas.map((pizza) =>{
        return(
            <CardList>
                <div className="Descricao">
                    <SaborPreco>
                        <p>Sabor: {pizza.sabor}</p> 
                        <p>R$ {pizza.preco}</p>
                    </SaborPreco>
                    <p>{pizza.ingredientes}</p>
                </div> 

                <IntCard>
                    <div>
                        <label>Tamanho: </label>
                        <select  onChange={onChange}>
                            <option value=""> </option>
                            <option value="P">P</option>
                            <option value="M">M</option>
                            <option value="G">G</option>
                        </select>
                    </div> 
                    <BotaoAdiciona>Adiciona</BotaoAdiciona>
                </IntCard>
    
            </CardList>
        )
    })

    return (
        <>
            <GlobalCard>

                {mapearPizzas}
            
            </GlobalCard>
        </>
    );
}

export default Home;