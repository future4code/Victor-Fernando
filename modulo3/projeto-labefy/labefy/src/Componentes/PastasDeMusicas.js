import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const ContainerHeader = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 24vh;
    background-image: linear-gradient(to right, #4C6DFD, #08E305);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const autorizacao = {
    headers: {
        Authorization: "victor-fernando-joy"
    }
}

class PastasDeMusicas extends React.Component{
    state = {
        nome: "",
        userId: "",
        playlistUser:[]
    }

    componentDidMount(){
        this.renderPlaylist()
    }

    valorDoNome = (event)=> {
        this.setState({nome: event.target.value})
    }

    criarPlaylist = () => {
        
        const body = {
            name: this.state.nome
        }

        axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", 
            body, 
            autorizacao)
        .then(()=>{
            alert("Criado com sucesso")
            this.setState({ nome:"" })
            this.renderPlaylist()
        })
        .catch((err)=>{
            alert("Erro ao criar playlist.")
            console.log(err)
        })
    }

    renderPlaylist = () => {
        axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            autorizacao)
            .then(response =>{
                this.setState({ playlistUser: response.data.result.list})
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    abrirPlaylist = (playlistid) => {
        
    }



  render(){

    const playlistRender = this.state.playlistUser.map((pasta) =>{

        return (
            <div onClick={()=> this.abrirPlaylist(pasta.id)}>
                <img/>
                <h3> {pasta.name} </h3>
            </div>
        )
    })

    return (
        <div>
            <ContainerHeader>
                <h2>Criar Playlist</h2>

                <input
                    placeholder="Nome"
                    type="text"
                    value={this.state.nome}
                    onChange={this.valorDoNome}
                />
                <button onClick={this.criarPlaylist}>Criar</button>
            </ContainerHeader>
            <div>
                {playlistRender}
            </div>
      </div>
    );
  }
}

export default PastasDeMusicas;