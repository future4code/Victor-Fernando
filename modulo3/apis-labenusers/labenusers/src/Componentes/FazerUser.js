import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const ContaineCriar = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  input{
    margin-top: 10px;
    height: 4vh;
    width: 14vw;
    border-radius: 1vh;
  }
`

class FazerUser extends React.Component{

  state = {
    nome: "",
    email: ""
  }

  criarNomeUser = (event)=> {
    this.setState({nome: event.target.value})
  }

  criarEmailUser = (event) => {
    this.setState({email: event.target.value})
  }

  criarNovoUser = () => {
    const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    const headers = {
      headers: {
        Authorization: "victor-fernando-joy"
      }
    }

    const body = {
      name: this.state.nome,
      email: this.state.email
    }

    axios.post(URL, body, headers)
    .then(()=>{
      alert(`Usuário ${this.state.nome} criado com sucesso!`)
      this.setState({nome:"", email:""})
    })
    .catch((err)=>{
      alert("Erro ao criar o usuário")
    })

  }

  render () {

    return (
      <ContaineCriar>
        <input
          placeholder= "Nome"
          type = "text"
          value={this.state.nome}
          onChange={this.criarNomeUser}
        />
        <input
          placeholder= "E-mail"
          type = "email"
          value={this.state.email}
          onChange={this.criarEmailUser}
        />
        <button onClick={this.criarNovoUser} >Criar Usuáro</button>
      </ContaineCriar>
    );
  }
}

export default FazerUser;