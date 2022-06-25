import { recipe } from "../model/recipe"
import { BaseDatabase } from "./BaseDatabase"
import { CustomError } from "../error/customError";

export class RecipeDatabase extends BaseDatabase {
    private TABLE_NAME = "cookenu_recipes"

    public insertRecipe = async (recipe: recipe) => {
        try {
            await RecipeDatabase.connection
                .insert({
                    id: recipe.id,
                    title: recipe.title,
                    description: recipe.description,
                    data_criacao: recipe.dataCriacao,
                    id_user: recipe.idUser
                })
                .into(this.TABLE_NAME)
         } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }
}