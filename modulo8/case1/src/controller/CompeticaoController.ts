import { Request, Response } from "express";
import { CompeticaoBusiness } from "../business/CompeticaoBusiness";
import { CompeticaoInputDTO } from "../model/Competicao";

export class CompeticaoController {

    public async create(req: Request, res: Response):Promise<void> {
        try {
            const input: CompeticaoInputDTO = req.body;

            const competicaoBusiness = new CompeticaoBusiness();
            await competicaoBusiness.create(input);

            res.status(201).send({ message: "Competição criada com sucesso" });

        } catch (error:any) {
            res.status(400).send(error.message);
        }

    }

    public async encerrarCompeticao(req: Request, res: Response):Promise<void>{

        try{
            const input: CompeticaoInputDTO = req.body;
            const competicaoBusiness = new CompeticaoBusiness();
            await competicaoBusiness.encerrarCompeticao(input);

            res.status(201).send({ message: "Competição encerrada" });

        }catch (error:any) {
            res.status(400).send(error.message);
        }

    }



} 