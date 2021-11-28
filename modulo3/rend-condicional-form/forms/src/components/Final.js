import React from 'react';
import styled from 'styled-components';
import PerguntasAbertas from './PerguntasAbertas';

class Final extends React.Component {
    render() {
        return(
            <div>
                <h1> O FORMULÁRIO ACABOU </h1>
                <PerguntasAbertas pergunta="Muito obrigado por participar! Entraremos em contato!" />
            </div>
        )
    }
}
export default Final;