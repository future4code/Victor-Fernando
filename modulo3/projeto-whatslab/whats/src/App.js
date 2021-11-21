import React from 'react';
import styled from 'styled-components'
import iconeEnviar from './img/mandar.png'

const Globau = styled.div`
  margin: 0;
  padding: 0; 
  display: flex;
  justify-content: center;
`

const Layout = styled.div`
  height: 99.7vh;
  width: 50vw;
  display: flex;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #32558b;
  @media(max-width: 667px) and (min-width: 375px){
    width: 100vh;
  }
  @media(max-width: 1366px) and (min-width: 768px){
    width: 70vh;
  }
`

const LayoutTexto = styled.div`
  display: flex;
  align-items: end;

  p{
  margin: 1% 3%;
  border: 1px solid black;
  background-color: #e7ffd9;
  border-radius: 20px;
  padding: 1px 15px 2px 8px;
  }
`


const LayoutInput = styled.div`
  width: 98%;
  display: grid;
  grid-template-columns: 14% 1fr 8%;
  margin: 6% 0 1% 0;
  height: 4%;
  padding: 0 0.8%;
  input{
    border-radius: 8px;
    margin: 0 0.6%;
  }

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    img{
      
      height: 80%;
      width: 60%;

      @media(max-width: 667px) and (min-width: 375px){
        width: 100%;
      }
    }
  }

  @media(max-width: 667px) and (min-width: 375px){
    
  }
`

class App extends React.Component{

  state = {

    listaMensagem: [
      { 
        id: 1,
        usuario: "",
        texto: ""
      },
    ],

    inputUsuario: "",
    inputTexto: "",    
  }

  enviarTexto = () => {
    const copiaListaMensagem = [...this.state.listaMensagem]

    const novaListaMensagem = {
      usuario: this.state.inputUsuario + ": ",
      texto: this.state.inputTexto
    }

    copiaListaMensagem.push(novaListaMensagem)

    this.setState({
      listaMensagem: copiaListaMensagem,
      inputUsuario: "",
      inputTexto: "", 

    })

    
  }

  onChangeUsuario = (event) => {
    this.setState({ inputUsuario: event.target.value });
  };

  onChangeTexto = (event) => {
    this.setState({ inputTexto: event.target.value });
  };
  
  render(){
    const caixaMensagem = this.state.listaMensagem.filter((item) =>{
      if(item.id === 1){
        return false
      } else {
        return true
      }
    })

    const mensagemDeTexto = caixaMensagem.map((cadaMensagem)=> {

      return(
        <LayoutTexto>
          <p><strong> {cadaMensagem.usuario} </strong> {cadaMensagem.texto}</p>
        </LayoutTexto>
        
      )
    })

  return (
    <Globau>
      <Layout>
        
        {mensagemDeTexto}
        
        <LayoutInput>
          <input 
            onChange={this.onChangeUsuario}
            value={this.state.inputUsuario}
            placeholder="Nome" />

          <input 
            onChange={this.onChangeTexto}
            value={this.state.inputTexto}
            placeholder="Digite" />

          <button onClick={this.enviarTexto}> <img src={iconeEnviar} /> </button>
        </LayoutInput>
      </Layout>
    </Globau>
  );
}
}

export default App;
