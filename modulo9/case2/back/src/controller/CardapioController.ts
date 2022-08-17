import { CardapioBusiness } from "../business/CardapioBusiness"
import { Request, Response } from "express"
import { CustomError } from "../error/customError"

const cardapioBusiness = new CardapioBusiness()

export class CardapioController {

    public getCardapio = async( req: Request, res: Response ): Promise<void> => {
        try{
            const result = await cardapioBusiness.getCardapio()

            res.status(200).send({cardapio: result})
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}