import express from 'express'
import { CardapioController } from '../CardapioController'

export const cardapioRouter = express.Router()

const cardapioController = new CardapioController()

cardapioRouter.get('/pizzas', cardapioController.getCardapio)