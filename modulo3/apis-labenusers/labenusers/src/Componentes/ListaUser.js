import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import EditaUser from './EditaUser'


const autorizacao = {
    headers: {
      Authorization: "victor-fernando-joy"
    }
  }

class ListaUser extends React.Component{

  state = {
    usuarios: [],
    telaAtual: "listaUser",
    nome:""
  }

  componentDidMount(){
    this.renderListaUser()
  }

  renderListaUser = ()=> {
    axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      autorizacao
    )
    .then((response)=>{
      this.setState({usuarios: response.data})
    })
  }

  trocarTela = (userid) => {
    if(this.state.telaAtual === "listaUser"){
      this.setState({ telaAtual: "editaruser"})
    } else{
      this.setState({ telaAtual: "listaUser"})
    }
  }

  onChangeNome =(event) =>{
    this.setState({ nome: event.target.value})
  }

  procurarUser = () => {
    axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.nome}&email=`,
      autorizacao
    )
    .then((response)=>{
      this.setState({usuarios: response.data})
    })
    .catch(()=>{
      alert("Erro ao procurar usuário.")
    })
  }

  render () {
    const listaUsuarios = this.state.usuarios
    return (
      <div>
        {this.state.telaAtual === "listaUser" ? (
          <div>
            <ul>
              <h4>Usuário cadastrados:</h4>
              {listaUsuarios.length === 0 && <div> Carregando... </div>}
              {listaUsuarios.map((user)=>{
                return (
                  <li>
                    {user.name}
                  </li>
                )
              })}
            </ul>
            <hr/>
            <h4>Procurar usuário</h4>
            <input
              placeholder="Digite o nome exato"
              type = "text"
              value = {this.state.nome}
              onChange={this.onChangeNome}
            />
            <button onClick= {this.procurarUser}> Procurar </button>
          </div>
        ) : (
          <EditaUser/>
        )}
      </div>
    );
  }
}

export default ListaUser;