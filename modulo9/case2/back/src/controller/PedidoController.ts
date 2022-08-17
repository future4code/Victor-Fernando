import { Request, Response } from "express"
import { CustomError } from "../error/customError"
import { InputPedidoDTO } from "../model/pedido"
import { PedidoBusiness } from "../business/PedidoBusiness"
import { InputItensDTO } from "../model/itens"

const pedidoBusiness = new PedidoBusiness()

export class PedidoController {

    public insertPedido = async ( req: Request, res: Response ): Promise<void> => {
        try {
            const input : InputPedidoDTO = {
                valor: req.body.valor,
                quantidade: req.body.quantidade
            }

            const result = await pedidoBusiness.insertPedido(input)

            res.status(201).send({ message: result })
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public insertItens = async ( req: Request, res: Response ): Promise<void> => {
        try {
            const input : InputItensDTO = {
                idPedido: req.body.idPedido,
                sabor: req.body.sabor,
                tamanho: req.body.tamanho,
                quantidade: req.body.quantidade,
                valor: req.body.valor
            }

            await pedidoBusiness.insertItens(input)

            res.status(201).send({ message: "Iten adicionado!"})
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public getPedido = async ( req: Request, res: Response ): Promise<void> => {
        try {
            const result = await pedidoBusiness.getPedido()

            res.status(200).send({ pedidos: result})
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public getItens = async ( req: Request, res: Response ): Promise<void> =>{
        try {
            const idPedido = req.params.id

            const result = await pedidoBusiness.getItens(idPedido)

            res.status(201).send({ itens: result})
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

}