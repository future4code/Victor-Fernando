import { BaseDatabase } from "./BaseDatabase";
import { Competicao } from "../model/Competicao";
import { BaseError } from "../error/BaseError";

export class CompeticaoDatabase extends BaseDatabase {

  private static TABLE_NAME = "case_competicoes";

  public async createCompeticao(competicao: string): Promise<void> {
    try {
      await CompeticaoDatabase.connection.schema.createTable(`${competicao}`, table => {
        table.string('id').primary();
        table.string('competicao');
        table.string('atleta');
        table.float('tempo');
        table.string('unidade');
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async inserrCompeticao(competicao: Competicao): Promise<void> {
    try{
      await CompeticaoDatabase.connection
      .insert(competicao)
      .into(CompeticaoDatabase.TABLE_NAME)
    
    }catch (error:any) {
      throw new Error(error.message) 
    }
  }

  public async getCompeticao(): Promise<any> {
    try{

      const result = await CompeticaoDatabase.connection(CompeticaoDatabase.TABLE_NAME)

      return result

    }catch (error:any) {
      throw new Error(error.message) 
    }
  }

  public async updateCompeticao(competicao: string, status: string): Promise<void> {
    try{
      await CompeticaoDatabase.connection(CompeticaoDatabase.TABLE_NAME)
      .update({encerrado: status})
      .where({name: competicao})

    }catch (error:any) {
      throw new Error(error.message) 
    }
  }

  public async resultCompeticao (competicao: string): Promise<void> {
    try{
      await CompeticaoDatabase.connection(competicao)
      .orderBy("tempo", "desc")
      

    } catch (error:any) {
      throw new BaseError(400, error.message);
    }
  }

}
