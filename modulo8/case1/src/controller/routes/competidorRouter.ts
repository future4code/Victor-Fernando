import express from 'express'
import { CompetidorController } from '../CompetidorController'

export const competidorRouter = express.Router()

const competidorController = new CompetidorController()

competidorRouter.post("/insert/:id", competidorController.insert)
// competidorRouter.get("/:id", competidorController.getIdCompeticao)
