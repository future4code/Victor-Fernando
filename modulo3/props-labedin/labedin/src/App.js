import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';

const Globau = styled.div`
  padding: 0;
  margin: 30px 0px 0px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`

const H2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

function App() {
  return (
    <Globau>
      <PageSectionContainer>
        <H2>Dados pessoais</H2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Victor Fernando" 
          descricao="Oi, eu sou o Victor. Sou estudante da Laben. No momento estou no modulo três do curso."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <CardPequeno 
          icone="https://cdn-icons-png.flaticon.com/512/561/561188.png"
          solicitado="Email:"
          endereco="victor722@gmail.com"
        />

        <CardPequeno 
          icone="https://cdn-icons.flaticon.com/png/512/4230/premium/4230281.png?token=exp=1636679839~hmac=38d419a18d26be35bbb3995ba291ff27"
          solicitado="Endereço:"
          endereco="Blumenau"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <H2>Experiências profissionais</H2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Formação" 
          descricao="Cursando análise e desenvolvimento de sistemas." 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Qualidade" 
          descricao="Fasilidade de apredizado." 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <H2>Minhas redes sociais</H2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </Globau>
  );
}

export default App;
