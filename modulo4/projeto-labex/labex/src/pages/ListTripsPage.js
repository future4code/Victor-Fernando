import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export function ListTripsPage (){

    const history = useHistory()

    const irParaHome = () => {
        history.psh("/")
    }

    

    return(
        <div>
            <div>
                <button onClick={irParaHome} >Voltar</button>
                <button>Inscrever-se</button>
            </div>
        </div>
    )
}

export default ListTripsPage;