import express from "express"
import { PedidoController } from "../PedidoController"

export const pedidoRouter = express.Router()

const pedidoController = new PedidoController()

pedidoRouter.post("/order", pedidoController.insertPedido)

pedidoRouter.post("/order/itens", pedidoController.insertItens)

pedidoRouter.get("/orders", pedidoController.getPedido)

pedidoRouter.get("/orders/:id", pedidoController.getItens)