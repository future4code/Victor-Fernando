import React, { useContext } from "react";
import { 
    Header,
    BotaoHeader,
    ContainerDetails,
    ContainerImg,
    ImgPoke,
    Stats,
    H2,
    Tipo,
    Ataques
} from "../../constants/styledPokemosList";
import logoPokemon from '../../images/logoPokemon.png';
import { useHistory } from 'react-router-dom';
import styled from "styled-components"
import GlobalEstadoContext from "../../global/GlobalEstadoContext";

const BotaoDetails = styled.button`
    position: absolute;
    right: 60px;
    cursor: pointer;
    background-color: #F21905;
    border-radius: 7px;
    height: 30px;

    :hover{
        background-color: #7ED0D9;
        box-shadow: 2px 2px 2px 2px rgba(50, 50, 50, 0.77);
    }
`

const DetailsPage = () => {
    const { pokemons, setPokemons, pokedex, setPokedex, pokeDetails } = useContext( GlobalEstadoContext );
    
    const history = useHistory()

    const voltar = () => {
        history.goBack()
    }
    console.log(pokeDetails)

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

    return(
        <div>
        <Header>
            
            <BotaoHeader onClick={()=>voltar()}> Voltar </BotaoHeader>

            <img src={logoPokemon} width={160}/>

            
            { pokedex.includes(pokeDetails) ? (
                <BotaoDetails onClick={()=> rmPokedex(pokeDetails.name)}> Remover da Pokédex </BotaoDetails>
                ) : (
                    <BotaoDetails onClick={()=> addPokedex(pokeDetails.name)}> Adicionar a Pokédex </BotaoDetails>
                )}
            
            
        </Header>
        <ContainerDetails>
            <ContainerImg>
                <ImgPoke src={pokeDetails.sprites.front_default}/>
                <ImgPoke src={pokeDetails.sprites.back_default}/>
            </ContainerImg>

            <Stats>
                <H2>Status</H2>
                { pokeDetails.stats.map((item)=>{
                    return( 
                        <p key={item.stat.name}>
                            <strong>{item.stat.name}: </strong>
                            {item.base_stat}
                        </p>
                    )
                })}
            </Stats>
            
            <div>

                <Tipo>
                    {pokeDetails && pokeDetails.types.map((item)=>{
                        return <p key={item.type.name}><strong>{item.type.name}</strong></p>
                    })}
                </Tipo>
                <Ataques>
                    <H2>Principais ataques</H2>
                    { pokeDetails &&
                        pokeDetails.moves.map((item, index)=>{
                            if(index > 50 && index < 56) {
                                return <p key={item.move.name}>{item.move.name}</p>
                            }
                        })
                        }
                </Ataques>

            </div>
        </ContainerDetails>
        </div>

    );
    
} 

export default DetailsPage;