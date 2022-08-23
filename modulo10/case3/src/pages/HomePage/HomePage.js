import React, { useContext, useEffect} from "react";
import { Selecao, Sorteio, Global } from "./styledHome";
import GlobalEstadoContext from "../../global/GlobalEstadoContext";
import { useHistory } from "react-router-dom";
import { LoteriaId } from "../../constants/loterias/LoteriaId"

const cores = [
    { id: 0, cor: "corFundoMega", nome: "Mega-Sena"},
    { id: 1, cor: "corFundoQuina", nome: "Quina"},
    { id: 2, cor: "corFundoLotoFacil", nome: "Lotofácio"},
    { id: 3, cor: "corFundoLotoMania", nome: "Lotomania"},
    { id: 4, cor: "corFundoTimeMania", nome: "Timemania"},
    { id: 5, cor: "corFundoSorte", nome: "Dia de Sorte"},
  ];

const HomePage = () => {

    const { idLoteria, corFundo, setCorFundo, sorteio} = useContext( GlobalEstadoContext );

    const fundo = () =>{
        const cor = cores.find((item) => item.id == idLoteria)
        console.log("cor", cor)
        setCorFundo(cor)
    }

    useEffect(() => {
        fundo()   
        
    },[idLoteria]);

    return(
        <Global>
            <div className={idLoteria == "" ? "corFundoPadrao" : corFundo?.cor}>
                <Selecao>
                    <LoteriaId/>
                    <p>{corFundo.nome}</p>
                    <p>ss</p>
                </Selecao>
            
                <Sorteio>
                    <div className="radius"/>
                    <div className="container">
                        <div className="containerNum">
                            {sorteio.numeros?.map((num) => {
                                return (
                                    <div className="numeros">
                                        <p>{idLoteria == "" ? "00" : num}</p>
                                    </div> 
                                )
                            })}
                        </div>
                        <div className="P">
                            <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
                        </div>
                        
                    </div>
                    
                </Sorteio>
            </div>
        </Global>
    );
    
} 

export default HomePage;