import { Request, Response } from "express";
import { CompetidorBusiness } from "../business/CompetidorBusiness";
import { Competidor } from "../model/Competidor";

export class CompetidorController {

    async insert(req: Request, res: Response):Promise<void> {
        try {
            const input: Competidor = {
                id: req.params.id,
                competicao: req.body.competicao, 
                atleta: req.body.atleta,
                tempo: req.body.tempo, 
                unidade: req.body.unidade
            }
           

            const competidorBusiness = new CompetidorBusiness()
            await competidorBusiness.insert(input)

            res.status(201).send({ message: "Dados iserido!" })

        } catch (error:any) {
            res.status(400).send(error.message);
        }

    }



}