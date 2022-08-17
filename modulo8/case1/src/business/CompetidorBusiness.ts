import { CompetidorDatabase } from "../data/CompetidorDatabase"
import { CompetidorInputDTO, Competidor, Competicao } from "../model/Competidor";
import { geraId } from '../services/geraId'
import { BaseError } from "../error/BaseError";

const competidorDatabase = new CompetidorDatabase()
const newId: string = geraId()

export class CompetidorBusiness {
    public async insert(input: CompetidorInputDTO): Promise<void> {

        try{
            const { id, competicao, atleta, tempo, unidade } = input;
            console.log(input)
            if (!id || !competicao || !atleta ||  !tempo || !unidade) {
                throw new Error("Dados inválidos id, competicao, atleta, tempo, unidade")
            }

            

            const competidor: Competidor  = { 
                id: newId, 
                competicao, 
                atleta, 
                tempo, 
                unidade  
            }

            const converter = competicao.toLocaleLowerCase().split(" ").join("_")

            
            console.log(id)
            const validar = await competidorDatabase.getIdCompeticao(id)
            

            
            if(validar[0].encerrada === "F"){

                await competidorDatabase.isertCompetido(competidor, converter)

            } else{
                throw new BaseError(400, "Competição encerrada")
            }

            
            
        } catch (error:any) {
            throw new BaseError(400, error.message);
        }
    }


}