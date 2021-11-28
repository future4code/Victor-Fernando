import React from 'react';
import styled from 'styled-components';
import Final from './Final';
import PerguntasAbertas from './PerguntasAbertas';

class Etapa2 extends React.Component {
    render() {

        const onClickEtapa2 = <Final />
        return(
            <div>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

                <PerguntasAbertas pergunta={"5. Qual curso?"}/>
                <PerguntasAbertas pergunta={"6. Qual a unidade de ensino?"}/>

                <button onClick={onClickEtapa2} > Próxima etapa</button>
            </div>
        )
    }
}
export default Etapa2;