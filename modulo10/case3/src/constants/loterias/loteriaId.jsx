import React, { useEffect, useContext } from "react"
import GlobalEstadoContext from "../../global/GlobalEstadoContext";
import { Select } from "./styledLoteriaId"



export const LoteriaId = () => {
    const { listaLoterias, setIdLoteria, idLoteria, concursos, numLoteria, setNumLoteria } = useContext(GlobalEstadoContext)

    const getId = (e) => {
        setIdLoteria(e.target.value);
    }


    


    return(
        <Select onChange={getId}>
            <option value={""}></option>
            {listaLoterias.map((loteria) => {
            return (
                <option key={loteria.id} value={loteria.id}>
                    {loteria.nome.toUpperCase()}
                </option>
                );
            })}
        </Select>
        
    )
}
