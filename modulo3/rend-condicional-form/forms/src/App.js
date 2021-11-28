import React from 'react';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import PerguntasAbertas from './components/PerguntasAbertas';
import OpcoesEscolha from './components/OpcoesEscolha';

const Gobal = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;

`

class App extends React.Component {

  
  render() {
    let proximaEtapa


    return(
        <Gobal>
            <Etapa1/>
        </Gobal>
    )
  }
}
export default App;