import { recipe } from "../model/recipe"
import { BaseDatabase } from "./BaseDatabase"
import { CustomError } from "../error/customError";
import { formatData } from "../services/dataAtual"

export class RecipeDatabase extends BaseDatabase {
    private TABLE_RECIPES = "v_cookenu_recipes_1"
    private TABLE_FOLLOWING = "cookenu_following"

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
                .into(this.TABLE_RECIPES)
         } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }

    public findRecipe = async (id: string) => {
        try {
            // const result = await RecipeDatabase.connection("v_cookenu_recipes_1")
            //     .select("v_cookenu_recipes_1.id", "v_cookenu_recipes_1.title", "v_cookenu_recipes_1.description", "v_cookenu_recipes_1.data_criacao", "v_cookenu_recipes_1.id_user")
            //     .join("cookenu_following", "v_cookenu_recipes_1.id_user", "cookenu_following.id_seguido")
            //     .where("cookenu_following.id_user", `${id}`)
            //     .orWhere("v_cookenu_recipes_1.id_user", `${id}`)



            const listId = await RecipeDatabase.connection(this.TABLE_FOLLOWING)
                .select()
                .where({id_user: id})
            console.log(listId)

            const listRec: string[]= []

            const userRecipes:any = await RecipeDatabase.connection(this.TABLE_RECIPES)
                .select()
                .where({id_user: id})

            
            
            for(let index of listId){
                const recipe:any = await RecipeDatabase.connection(this.TABLE_RECIPES)
                    .select()
                    .where({id_user: index.id_seguido})
                

                if(recipe.length){

                    listRec.push(recipe)
                }
                
            }

            const newList: any[] = []

            if(userRecipes.length){
                newList.push(userRecipes[0], listRec[0])
            } else {
                newList.push(listRec[0])
            }
            

            return  newList
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}