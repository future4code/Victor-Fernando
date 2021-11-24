import React from 'react';
import styled from 'styled-components';
import Final from './Final';
import PerguntasAbertas from './PerguntasAbertas';
import OpcoesEscolha from './OpcoesEscolha';


class Etapa3 extends React.Component {
    render() {

        const onClickEtapa3 = <Final/>
        return(
            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h1>

                <PerguntasAbertas pergunta={"5. Por que voçê não terminou um de graduação?"}/>
                <OpcoesEscolha 
                    pergunta={"6. Voçê fez algum curso complementar?"}
                    opcoes= {[
                        "Nenhum",
                        "Curso Técnico",
                        "Curso de inglês"
                    ]}
                />
                <button onClick={onClickEtapa3}></button>
            </div>
        )
    }
}
export default Etapa3;