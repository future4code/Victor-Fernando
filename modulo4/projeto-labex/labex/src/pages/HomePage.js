import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


export function HomePage (){

    const history = useHistory();

    const verViagens = () => {
        history.push("/viagens")
    };

    return(
        <div>
            <p>Labex</p>
            <div>
                <button>Logar</button>
                <button onClick={verViagens} >Ver viagens</button>
            </div>
        </div>
    )
}

export default HomePage;