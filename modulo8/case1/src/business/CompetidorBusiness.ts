import { CompetidorDatabase } from "../data/CompetidorDatabase"
import { CompetidorInputDTO, Competidor, Competicao } from "../model/Competidor";
import { geraId } from '../services/geraId'
import { BaseError } from "../error/BaseError";

const competidorDatabase = new CompetidorDatabase()
const id: string = geraId()

export class CompetidorBusiness {
    public async insert(input: CompetidorInputDTO ):Promise<void> {

        try{
            const { competicao, atleta, tempo, unidade } = input;

            if (!competicao || !atleta ||  !tempo || !unidade) {
                throw new Error("Dados inválidos competicao, atleta, tempo, unidade")
            }

            

            const competidor: Competidor  = { 
                id: id, 
                competicao, 
                atleta, 
                tempo, 
                unidade  
            }

            const converter = competicao.toLocaleLowerCase().split(" ").join("_")

            

            const validar = await competidorDatabase.getCompeticao(competicao)
            console.log(validar)

            
            if(validar.encerrada === "F"){

                await competidorDatabase.isertCompetido(competidor, converter)

            } else{
                throw new BaseError(400, "Competição encerrada")
            }

            
            
        } catch (error:any) {
            throw new BaseError(400, error.message);
        }
    }


}