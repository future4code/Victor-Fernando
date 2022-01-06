import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import ListaDeMusicas from './ListaDeMusicas'
import imgPasta from '../img/images.png'


const ContainerMusicas = styled.div`
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

const ManPasta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 0;

    @media(min-height: 100.6vh){
        height: 100%;
    }
`

const CardPasta = styled.div`
    width: 40vw;
    height: 8vh;
    background-color: #3D3F3F;
    margin: 8px 0;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;

    button{
        margin-left: 10px;
    }
`

const ImgPasta = styled.img`
    width: 40px;
    height: 40px;
`

const Botao = styled.button`
    background-color: #4b6ef9;
    
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
        playlistUser:[],
        trocarTela:"playlist",
        playlistid: "",
    }

    componentDidMount(){
        this.renderPlaylist()
    }

    inputNome = (event)=> {
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

        if(this.state.trocarTela === "playlist"){
            this.setState({ trocarTela: "voltar", playlistid: playlistid})
        } else{
            this.setState({trocarTela: "playlist", playlistid: ""})
        }
    }


    deletaPlaylist = (playlistid) =>{
        axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistid}`,
            autorizacao
        )
        .then(()=>{
            alert("Deletar playlist");
            this.renderPlaylist()
        })
        .catch((err)=>{
            console.log(err)
        })
    }



  render(){

    const playlistRender = this.state.playlistUser.map((pasta) =>{
        
        return (
                <CardPasta>
                    <ImgPasta src={imgPasta} />
                    <h3> {pasta.name} </h3>
                    <Botao onClick={()=> this.abrirPlaylist(pasta.id)}> Detalhes </Botao>
                    <Botao onClick={()=>this.deletaPlaylist(pasta.id)}> Deletar </Botao>
                </CardPasta>
        )
    })

    return (
        <div>
            {this.state.trocarTela === "playlist" ? (
                <div>
                    <ContainerMusicas>
                        <h2>Criar Playlist</h2>

                        <input
                            placeholder="Nome"
                            type="text"
                            value={this.state.nome}
                            onChange={this.inputNome}
                        />
                        <button onClick={this.criarPlaylist}>Criar</button>
                    </ContainerMusicas>
                    <ManPasta>
                        {playlistRender}
                    </ManPasta>
                </div>
            ) : (
                <ListaDeMusicas
                    // musicaUser={this.state.musicaUser} 
                    playlistid={this.state.playlistid}  
                    trocar={this.abrirPlaylist}
                    abrirPlaylist={this.abrirPlaylist}
                />
            )}
      </div>
    );
  }
}

export default PastasDeMusicas;