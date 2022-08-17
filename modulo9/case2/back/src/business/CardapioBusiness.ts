import { CardapioDatadase } from "../data/CardapioDatadase"
import { CustomError } from "../error/customError"

const cardapioDatadase = new CardapioDatadase()

export class CardapioBusiness {

    public getCardapio = async () => {
        try {
            const cardapio = await cardapioDatadase.getCardapio()

            return cardapio
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}