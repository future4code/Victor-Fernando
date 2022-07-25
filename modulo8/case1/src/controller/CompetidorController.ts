import { Request, Response } from "express";
import { CompetidorBusiness } from "../business/CompetidorBusiness";
import { CompetidorInputDTO } from "../model/Competidor";

export class CompetidorController {

    async insert(req: Request, res: Response):Promise<void> {
        try {
            const input: CompetidorInputDTO = req.body;

            const competidorBusiness = new CompetidorBusiness();
            await competidorBusiness.insert(input);

            res.status(201).send({ message: "Dados iserido!" });

        } catch (error:any) {
            res.status(400).send(error.message);
        }

    }



}