import React, { useContext }  from "react";
import { 
    CardList,
    Botoes,
    ImgContainer,
    Img,
    ContainerLista,
    Header,
    BotaoHeader
} from "../../constants/styledPokemosList";
import GlobalEstadoContext from "../../global/GlobalEstadoContext";
import { useHistory } from "react-router-dom";
import  Pokedex  from  "../../images/Pokedex.png";

const PokedexPage = () => {
    const { pokemons, setPokemons, pokedex, setPokedex, setPokeDetails } = useContext( GlobalEstadoContext );

    const history = useHistory()

    const goHome = () => {
        history.push("/")
    }

    const goDetails = (pokeName) => {
        history.push("/details")

        const filtraPokelista = pokedex.find((item)=> item.name === pokeName )
        setPokeDetails(filtraPokelista)
    }

    const rmPokedex = (pokeName) => {

        const filtraPokelista = pokedex.filter((item)=> item.name !== pokeName  )
        setPokedex(filtraPokelista)

        const atualizarPokemons = pokedex.find((item)=> item.name === pokeName )

        const novaLista = [...pokemons, atualizarPokemons]
        const orderedPokemons = novaLista.sort((a, b) => {
            return a.id - b.id;
          });
        setPokemons(orderedPokemons)

    
    }

    


    return(
        <>
            <Header>
                <BotaoHeader onClick={()=> goHome()}>Ir para home</BotaoHeader>
                <img src={Pokedex} width={190}/>
            </Header>
            <ContainerLista>
                {pokedex.length > 0 ? (
                    pokedex.map((pokemon)=>{
                        return(
                            <CardList key={pokemon.species.name}>
                                <ImgContainer>
                                    <Img src={pokemon.sprites.front_default} alt={pokemon.species.name}/>
                                </ImgContainer>
                                <Botoes>
                                    <button onClick={()=> rmPokedex(pokemon.name)} > Deletar da Pokédex </button>
                                    <button onClick={()=> goDetails(pokemon.name)}> Ver detalhes </button>
                                </Botoes>
                            </CardList>
                    )
                })) : (
                    <h1> Pokédex Vazia </h1>
                ) }
            </ContainerLista>
        </>

    );
    
} 

export default PokedexPage;