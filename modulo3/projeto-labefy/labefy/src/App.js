import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PastasDeMusicas from './Componentes/PastasDeMusicas';
import ListaDeMusicas from './Componentes/ListaDeMusicas'


class App extends React.Component{

  render(){
    return (
      <div>
        <PastasDeMusicas/>

      </div>
    );
  }
}

export default App;
