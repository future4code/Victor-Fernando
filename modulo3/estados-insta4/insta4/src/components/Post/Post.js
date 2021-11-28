import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

const SecaoAdicina = styled.div`
  margin: 10px 0;

  input{
    margin-right: 5px;

    :hover{
    background-color: black;
    color: #ffffff;
  }
  }

  
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,

    posts: [ 
      { 
        nomeUser: "paulinha",
        fotoUser: "https://picsum.photos/50/50",
        fotoDoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUser: "phelipe",
        fotoUser: "https://picsum.photos/50/50?p/1",
        fotoDoPost: "https://picsum.photos/200/150?p/2",
      },
      {
        nomeUser: "pedro",
        fotoUser: "https://picsum.photos/50/50?p/3",
        fotoDoPost: "https://picsum.photos/200/150?p/4",
      },
    ],

    valorInputFotoUser: "",
    valorInputNomeUser: "",
    valorInputFotoDoPost: "",


  }

  adicionarPost = () => {
    const postando = {
      fotoUser: this.state.valorInputFotoUser,
      nomeUser: this.state.valorInputNomeUser,
      fotoDoPost: this.state.valorInputFotoDoPost
    };

    const novosPosts = [postando, ...this.state.posts];

    this.setState({
      posts: novosPosts,
      valorInputFotoUser: "",
      valorInputNomeUser: "",
      valorInputFotoDoPost: "",
    })

   

  }

  onChangeInputNomeUser = (event) => {
    this.setState({ valorInputNomeUser: event.target.value });
  }

  onChangeInputfotoUser = (event) => {
    this.setState({ valorInputFotoUser: event.target.value });
  }

  onChangeInputFotoDoPost = (event) => {
    this.setState({ valorInputFotoDoPost: event.target.value });
  }

  onClickCurtida = (index) => {
    if(this.state.curtido === false){
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    } else {
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }

    // const copiaPosts = [...this.state.posts]

    // const copiaFiltradaPosts = copiaPosts.filter((elementos, iElementos) =>{
    //   if(iElementos === index && this.state.curtido === false){
    //     return (
    //       this.setState({
    //         curtido: true,
    //         numeroCurtidas: this.state.numeroCurtidas + 1
    //       })
    //     )
    //   } else if(iElementos === index && this.state.curtido === true){
    //     return (
    //       this.setState({
    //         curtido: false,
    //         numeroCurtidas: this.state.numeroCurtidas - 1
    //       })
    //     )
    //   }
    // })

    // this.setState({posts: copiaFiltradaPosts})
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
    
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco;
    };

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    };

    const NovoPastUsuario = this.state.posts.map((dados, index) =>{
      return(
        <PostContainer key={dados.nomeUser}>
          <PostHeader>
            <UserPhoto src={dados.fotoUser} alt={'Imagem do usuario'}/>
            <p>{dados.nomeUser}</p>
          </PostHeader>
    
          <PostPhoto src={dados.fotoDoPost} alt={'Imagem do post'}/>
    
          <PostFooter>
            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={this.onClickCurtida}
              posicao={index}
              valorContador={this.state.numeroCurtidas}
            />
    
            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={this.state.numeroComentarios}
            />
          </PostFooter>
          {componenteComentario}
        </PostContainer>
      )
    })

    return (
      <div>
        <SecaoAdicina>
          <input
              value={this.state.valorInputNomeUser}
              onChange={this.onChangeInputNomeUser}
              placeholder={"Nome"}
          />

          <input
              value={this.state.valorInputFotoUser}
              onChange={this.onChangeInputfotoUser}
              placeholder={"Foto do usuario"}
          />

          <input
              value={this.state.valorInputFotoDoPost}
              onChange={this.onChangeInputFotoDoPost}
              placeholder={"Foto do post"}
          />
          <button onClick={this.adicionarPost}>Postar</button>
        </SecaoAdicina>
        <div> {NovoPastUsuario} </div>
      </div>
  )
    }
}

export default Post