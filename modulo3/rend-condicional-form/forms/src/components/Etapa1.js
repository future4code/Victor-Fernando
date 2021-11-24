import React from 'react';
import styled from 'styled-components';
import PerguntasAbertas from './PerguntasAbertas';
import OpcoesEscolha from './OpcoesEscolha';

const Pagina1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    select{
        margin-bottom: 5%;
    }
`

class Etapa1 extends React.Component {
    render() {
        return(
            <Pagina1>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <PerguntasAbertas pergunta={"1. Qual o seu nome?"}/> 
                <PerguntasAbertas pergunta={"2. Qual sua idade?"}/>
                <PerguntasAbertas pergunta={"3. Qual seu email?"}/>
                <OpcoesEscolha 
                    pergunta={"4. Qual a sua escolaridade"}
                    opcoes= {[
                        "Selecione",
                        "Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo",
                    ]}
                />
            
            </Pagina1>
        )
    }
}
export default Etapa1;