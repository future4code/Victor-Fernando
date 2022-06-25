import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness"
import { InputRecipeDTO } from "../model/recipe"


const recipeBusiness = new RecipeBusiness()

export class RecipeController {

    public postRecipe = async(req: Request, res: Response) => {
        try {
            console.log('Recipe')
            const input:InputRecipeDTO = {
                title: req.body.title,
                description: req.body.description,
                dataCriacao: req.body.dataCriacao,
                idUser: req.params.id,
                token: req.headers.authorization!
            }
 
            await recipeBusiness.postRecipe(input)

            res.status(200).send({message: "Receita postada."})
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
}