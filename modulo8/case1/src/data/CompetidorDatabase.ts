import { Competidor, Competicao } from "../model/Competidor";
import { BaseDatabase } from "./BaseDatabase";

export class CompetidorDatabase extends BaseDatabase {
  private static TABLE_NAME = "case_competicoes";

  public async isertCompetido(post: Competidor, competicao: string): Promise<void> {
    try {

      await CompetidorDatabase.connection
        .insert(post)
        .into(competicao);

    }catch (error:any) {
      throw new Error(error.message) 
    }
  }

  public async getCompeticao(competicao: string): Promise<any> {
    try{

      const result = await CompetidorDatabase.connection
      .select(CompetidorDatabase.TABLE_NAME)
      .where(competicao)

      console.log("data", result)
      return result
    }catch (error:any) {
      throw new Error(error.message) 
    }
  }



}