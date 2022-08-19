import React, { useContext } from "react";
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
import  logoPokemon  from  "../../images/logoPokemon.png";


const HomePage = () => {

    const { pokemons, setPokemons, pokedex, setPokedex, setPokeDetails } = useContext( GlobalEstadoContext );

    const history = useHistory();

    const goPokedex = () => {
        history.push(`/pokedex`)
    }

    const goDetails = (pokeName) => {
        history.push("/details")

        const filtraPokelista = pokemons.find((item)=> item.name === pokeName )
        setPokeDetails(filtraPokelista)

    }

    const addPokedex = (pokeName) => {

        const filtraPokelista = pokemons.find((item)=> item.name === pokeName )

        const novoPokedex = [...pokedex, filtraPokelista]
        const orderedPokedex = novoPokedex.sort((a, b) => {
            return a.id - b.id;
          });
        setPokedex(orderedPokedex)

        const atualizarPokemons = pokemons.filter((item)=> item.name !== pokeName )
        setPokemons(atualizarPokemons)
    }


    const mapearPokemons = pokemons.length && pokemons.map((pokemon)=>{

        return(
            <>
                {pokemon?.sprites && <CardList key={pokemon.species.name}>
                    <ImgContainer>
                        <Img src={pokemon.sprites.front_default} alt={pokemon.species.name}/>
                    </ImgContainer>
                    <Botoes>
                        <button onClick={()=> addPokedex(pokemon.name)} > Adicionar a Pokédex </button>
                        <button onClick={()=> goDetails(pokemon.name)}> Ver detalhes </button>
                    </Botoes>
                </CardList>}
            </>
        )
    })

    return(
        <>
            <Header>
                <BotaoHeader onClick={()=> goPokedex()}>Ir para poédex</BotaoHeader>
                <img src={logoPokemon} width={160}/>
            </Header>
            <ContainerLista>

                {mapearPokemons}

            </ContainerLista>
        </>
    );
    
} 

export default HomePage;