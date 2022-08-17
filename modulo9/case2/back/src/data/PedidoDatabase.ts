import { BaseDatabase } from "./BaseDatabase"
import { CustomError } from "../error/customError";
import { pedido } from "../model/pedido";
import { itens } from "../model/itens";


export class PedidoDatabase extends BaseDatabase {
    private TABLE_PEDIDO = "pizzaria_pedido"
    private TABLE_ITENS = "pizzaria_itens_pedido"

    public insertPedido = async (pedido: pedido) => {
        try { 
            await PedidoDatabase.connection
                .insert({
                    id_pedido: pedido.idPedido,
                    quantidade: pedido.quantidade,
                    valor: pedido.valor
                })
                .into(this.TABLE_PEDIDO)
            
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public insertItens = async (itens: itens) => {
        try { 
            await PedidoDatabase.connection
                .insert({
                    id_pedido: itens.idPedido,
                    sabor: itens.sabor,
                    tamanho: itens.tamanho,
                    valor: itens.valor,
                    quantidade: itens.quantidade
                })
                .into(this.TABLE_ITENS)


        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public getPedido = async () => {
        try {
            const result = await PedidoDatabase.connection
                .select(this.TABLE_PEDIDO)

            return result[0]
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public getItens = async (idPedido: string) => {
        try {
            const result = await PedidoDatabase.connection
                .select(this.TABLE_ITENS)
                .where({id_pedido: idPedido})

            return result[0]
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }


}