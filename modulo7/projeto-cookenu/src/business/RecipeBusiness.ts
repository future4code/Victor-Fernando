import { InputRecipeDTO, recipe } from "../model/recipe"
import { RecipeDatabase } from "../data/RecipeDatabase"
import { Authenticator } from "../services/authenticator"
import { generateId } from "../services/idGenerator"
import { CustomError } from "../error/customError"
import { dataAtual } from "../services/dataAtual"

const recipeDatabase = new RecipeDatabase()
const authenticator = new Authenticator()

export class RecipeBusiness {

    public postRecipe = async (input:InputRecipeDTO) => {
        try {
            let{
                title,
                description,
                idUser,
                dataCriacao,
                token
            } = input

            if(!title || !description) {
                throw new CustomError(400, "Preencha corretamente os campos")
            }

            const id = generateId()
            const compareToken = authenticator.getToken(token)
            const data = dataAtual() 
        
            const recipe: recipe = {
                id,
                title,
                description,
                dataCriacao,
                idUser
            }

            await recipeDatabase.insertRecipe(recipe)

        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}