import { PedidoDatabase } from "../data/PedidoDatabase"
import { generateId } from "../services/idGenerator"
import { pedido, InputPedidoDTO } from "../model/pedido"
import { CustomError } from "../error/customError"
import { InputItensDTO, itens } from "../model/itens"

const pedidoDatabase = new PedidoDatabase()

export class PedidoBusiness {

    public insertPedido = async (input: InputPedidoDTO) => {
        try{
            const { valor, quantidade } = input

            const id = generateId()

            const pedido: pedido = {
                idPedido: id,
                quantidade: quantidade,
                valor: valor
            }

            await pedidoDatabase.insertPedido(pedido)

            return id

        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public insertItens = async (input: InputItensDTO) => {
        try {
            const { idPedido, sabor, tamanho, quantidade, valor } = input

            if(!idPedido || !sabor || !tamanho || !quantidade || !valor){
                throw new CustomError(400, "Preencha os dados idPedido, sabor, tamanho e valor")
            }

            const itens: itens = {
                idPedido,
                sabor,
                tamanho,
                quantidade,
                valor
            }

            await pedidoDatabase.insertItens(itens)

        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public getPedido = async (): Promise<void> => {
        try {
            const result = await pedidoDatabase.getPedido()

            return result
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public getItens = async (idPedido: string) => {
        try {
            const result = await pedidoDatabase.getItens(idPedido)

            return result
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}