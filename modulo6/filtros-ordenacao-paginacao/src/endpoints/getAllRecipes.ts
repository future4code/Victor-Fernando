import { Request, Response } from "express";
import { off } from "process";
import  connection  from "../data/connection";
import { recipe } from "../types";

// export async function getAllRecipes(
//   req: Request,
//   res: Response
// ): Promise<void>{
//     try {
        
//         const result = await connection("aula48_exercicio")
//             .select()

//         const recipes = result.map(toRecipe);

//         res.status(200).send(recipes);
//     } catch (error: any) {
//     res.status(400).send(error.message);
//     }
// }

// ## 1


export async function getAllUsers(
      req: Request,
      res: Response
    ): Promise<void>{
    try {

        const name= req.query.name

        if(!name){
            throw new Error("Digite um name")
        }

       const users = await connection("aula48_exercicio").where({name: name})

 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }


 
 



const toRecipe = (input: any): recipe => {
    return {
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type,
      
    };
  };