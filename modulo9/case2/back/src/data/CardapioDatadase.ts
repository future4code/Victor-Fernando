import { BaseDatabase } from "./BaseDatabase"
import { CustomError } from "../error/customError";



export class CardapioDatadase extends BaseDatabase{
    private TABLE_CARDAPIO = "pizzaria_cardapio"

    public getCardapio = async () => {
        try {

            const cardapio = await CardapioDatadase.connection(this.TABLE_CARDAPIO)

            return cardapio
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}