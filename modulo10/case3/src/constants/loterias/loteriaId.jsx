import React, { useEffect, useContext } from "react"
import GlobalEstadoContext from "../../global/GlobalEstadoContext";



const LoteriaId = () => {
    const { listaLoterias, setIdLoteria } = useContext(GlobalEstadoContext)

    const getId = (e) => {
        setIdLoteria(e.target.value);
    }

    return(
        <select className="" onChange={getId}>
            <option value={""}></option>
            {listaLoterias.map((loteria) => {
            return (
                <option key={loteria.id} value={loteria.id}>
                    {loteria.nome.toUpperCase()}
                </option>
                );
            })}
        </select>
        
    )
}

export default LoteriaId;