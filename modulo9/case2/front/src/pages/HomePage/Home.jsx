import React, { useState, useEffect, useContext } from "react";
import GlobalEstadoContext from "../../global/GlobalEstadoContext"
import { CardList, GlobalCard, SaborPreco } from "./styledHome";


const Home = () => {


    const [form, setForm] = useState("")

    const onChange = (event) => {
        setForm({[event.target.name]: event.target.value})
      }
    


    const { listaPizzas } = useContext(GlobalEstadoContext)

    const mapearPizzas = listaPizzas.map((pizza) =>{
        return(
            <CardList>
                <div>
                    <SaborPreco>
                        <p>Sabor: {pizza.sabor}</p> 
                        <p>R$ {pizza.preco}</p>
                    </SaborPreco>
                    <p>{pizza.ingredientes}</p>
                </div> 
                <></> 
                    <label>Tamanho:</label>
                    <select value="tamnho" onChange={onChange}>
                        <option value=""> </option>
                        <option value="P">P</option>
                        <option value="M">M</option>
                        <option value="G">G</option>
                    </select>

    
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