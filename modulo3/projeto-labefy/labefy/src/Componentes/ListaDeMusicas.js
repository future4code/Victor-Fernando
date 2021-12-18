import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import imgMusica from '../img/download.png'

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
const ManMusica = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 0;
`

const CardMusicas = styled.div`
    width: 40vw;
    height: 8vh;
    background-color: #3D3F3F;
    margin: 8px 0;
    padding: 2px 12px;
    display: flex;
    /* align-items: center; */
    color: white;

    img{
      width: 40px;
      height: 40px;
      margin-right: 14px;
      align-self: center;
    }

    div{
      flex: 1;
      margin-top: 18px;
    }
`

const Descricao = styled.div`
  align-self: flex-end;
  h4{
    margin: 0 ;
  }

  p{
    margin: 0;
    margin-bottom: 6px;
    font-size: 12px;
  }
`

const ManVazia = styled.h1`
  display: flex;
  justify-content: center;
  margin: 50px;
`

const autorizacao = {
  headers: {
      Authorization: "victor-fernando-joy"
  }
}

class ListaDeMusicas extends React.Component{

  state = {
    nome: "",
    artista: "",
    url: "",
    musicaUser: [],
  }

  componentDidMount () {
    this.renderMusicas()
  }

  inputNome = (event)=> {
    this.setState({nome: event.target.value})
  }

  inputArtista = (event)=> {
    this.setState({artista: event.target.value})
  }

  inputUrl = (event)=> {
    this.setState({url: event.target.value})
  }

  renderMusicas = () =>{
    axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistid}/tracks`,
      autorizacao
    )
    .then((response)=>{
      console.log(response.data.result.tracks)
      this.setState({musicaUser: response.data.result.tracks})
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
  adicinarMusica = ()=> {
    const body = {
      name: this.state.nome,
      artist: this.state.artista,
      url: this.state.url
    }

    axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistid}/tracks`,
      body,
      autorizacao
    )
    .then(()=>{
      this.setState({ nome: "", artista: "", url: "" })
      this.renderMusicas()
      alert("Adicionado")
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  deletaMusica = (musicaid) => {
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistid}/tracks/${musicaid}`,
      autorizacao
    )
    .then(()=>{
      this.renderMusicas()
    })
    .catch((err)=>{
      alert("Erro ao deletar.")
    })
  }
  

  render(){

    const quant = this.state.musicaUser.length

    return (
      <div>
        <ContainerHeader>
          <button onClick={this.props.trocar}>voltar</button>
          <input
            type= "text"
            placeholder="Nome da musica"
            value={this.state.nome}
            onChange={this.inputNome}
          />
          <input
            type= "text"
            placeholder="Nome do artista(s)"
            value={this.state.artista}
            onChange={this.inputArtista}

          />
          <input
            type= "link"
            placeholder="Link"
            value={this.state.url}
            onChange={this.inputUrl}
            />

          <button onClick={this.adicinarMusica}> Adicionar </button>
        </ContainerHeader>
        {this.state.musicaUser.length === 0 ? (
          <ManVazia>Playlist Vazia</ManVazia>
        ):(
          this.state.musicaUser.map(musica => {
            return(
              <ManMusica>
                  <CardMusicas>
                    <img src={imgMusica}/>
      
                    <Descricao>
                      <h4>{musica.name}</h4>
                      <p>{musica.artist}</p>
                    </Descricao>
                    <div>
                      <button onClick={()=>this.deletaMusica(musica.id)} >Deletar</button>
                    </div>
                  </CardMusicas>
              </ManMusica>
            )
          })
          )}
        
      </div>
    );
  }
}

export default ListaDeMusicas;