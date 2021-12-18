import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import FazerUser from './Componentes/FazerUser';
import ListaUser from './Componentes/ListaUser';

const ContaineApp = styled.div`
  margin: 0;
  padding: 0;
  height: 50vh;
  width: 30vw;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button{
    margin-top: 10px;
  }
`

const Globau = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`

class App extends React.Component{

  state = {
    telaAtual: "fazerUser"
  }

  trocarTela = ()=> {
    if(this.state.telaAtual === "fazerUser"){
      this.setState({ telaAtual: "listaUser"})
    } else {
      this.setState({ telaAtual: "fazerUser" })
    }
  }

  render () {

    return (
      <Globau>
        <ContaineApp>
          
          {this.state.telaAtual === "fazerUser" ? <FazerUser/> : <ListaUser/>}
          <button onClick = {this.trocarTela}>Ver lista de usuário</button>
          
        </ContaineApp>
      </Globau>
    );
  }
}

export default App;
