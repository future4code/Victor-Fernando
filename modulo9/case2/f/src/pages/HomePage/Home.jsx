import React, { useContext } from "react";
import GlobalEstadoContext from "../../global/GlobalEstadoContext"
import { CardList, GlobalCard } from "./styledHome";


const Home = () => {

    const { listaPizzas } = useContext(GlobalEstadoContext)

    const mapearPizzas = listaPizzas.map((pizza) =>{
        return(
            <CardList>
                
                    <p> {pizza.sabo}</p> 
                    <p> {pizza.precp}</p>
                    <p>{pizza.ingredientes}</p>
    
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