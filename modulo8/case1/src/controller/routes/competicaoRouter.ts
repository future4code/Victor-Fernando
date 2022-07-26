import express from 'express'
import { CompeticaoController } from '../CompeticaoController'

export const competicaoRouter = express.Router()

const competicaoController = new CompeticaoController()

competicaoRouter.post("/create", competicaoController.create)
competicaoRouter.post("/encerrar", competicaoController.encerrarCompeticao)
competicaoRouter.get("/get", competicaoController.getCompeticao)
competicaoRouter.get("/result", competicaoController.resultCompeticao)