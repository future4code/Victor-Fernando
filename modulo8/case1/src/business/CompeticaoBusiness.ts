import { Request, Response } from "express";
import { CompeticaoDatabase } from "../data/CompeticaoDatabase";
import { geraId } from '../services/geraId';
import { CompeticaoInputDTO, Competicao } from "../model/Competicao";
import { BaseError } from "../error/BaseError";

const competicaoDatabase = new CompeticaoDatabase()
const id = geraId()


export class CompeticaoBusiness {
  async create(input: CompeticaoInputDTO ):Promise<void> {

    try{
      const { competicao } = input;

      if (!competicao) {
        throw new Error("Dados inválidos ( name )")
      }


      const newCompeticao: Competicao = {
          id: id,
          competicao: competicao
      }

      await competicaoDatabase.inserrCompeticao(newCompeticao)

      const converter = competicao.toLocaleLowerCase().split(" ").join("_")


      await competicaoDatabase.createCompeticao(converter)

  

    } catch (error:any) {
        throw new BaseError(400, error.message);
    }

  }

  public async encerrarCompeticao(input: CompeticaoInputDTO): Promise<void>{
    try{
        const { competicao } = input

        const status = "T"

        await competicaoDatabase.updateCompeticao(competicao, status)

    } catch (error:any) {
        throw new BaseError(400, error.message);
    }
  }




}