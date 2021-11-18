import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'phelipe'}
          fotoUsuario={'https://picsum.photos/50/50?p/1'}
          fotoPost={'https://picsum.photos/200/150?p/2'}
        />
        <Post
          nomeUsuario={'pedro'}
          fotoUsuario={'https://picsum.photos/50/50?p/3'}
          fotoPost={'https://picsum.photos/200/150?p/4'}
        />
      </MainContainer>
    );
  }
}

export default App;
