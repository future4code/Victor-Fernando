import { Request, Response } from "express";
import { CompeticaoBusiness } from "../business/CompeticaoBusiness";
import { CompeticaoInputDTO } from "../model/Competicao";

const competicaoBusiness = new CompeticaoBusiness();

export class CompeticaoController {

    public async create(req: Request, res: Response):Promise<void> {
        try {
            const input: CompeticaoInputDTO = req.body;

            await competicaoBusiness.create(input);

            res.status(201).send({ message: "Competição criada com sucesso" });

        } catch (error:any) {
            res.status(400).send(error.message);
        }

    }

    public async encerrarCompeticao(req: Request, res: Response):Promise<void>{

        try{
            const input: CompeticaoInputDTO = req.body;
            await competicaoBusiness.encerrarCompeticao(input);

            res.status(201).send({ message: "Competição encerrada" });

        }catch (error:any) {
            res.status(400).send(error.message);
        }

    }

    public async getCompeticao(req: Request, res: Response): Promise<void>{
        try{
            
            const result = await competicaoBusiness.getCompeticao()

            res.status(201).send({ competicoes: result })

        }catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    public async resultCompeticao(req: Request, res: Response):Promise<void>{
        try{
            
            const input: CompeticaoInputDTO = req.body
            const result = await competicaoBusiness.resultCompeticao(input)

            res.status(201).send({ result: result[0] })
        }catch (error:any) {
            res.status(400).send(error.message);
        }
    }

} 