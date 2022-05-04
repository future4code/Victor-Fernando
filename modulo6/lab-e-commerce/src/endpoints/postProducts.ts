import { Request, Response }  from "express";
import connection from "../data/connection";
import { users } from "../types";
import { createPostProducts } from "./querys/createPostProducts"

export async function postProducts(
    req: Request,
    res: Response
): Promise<void> {
    try{
        const name = req.body.name
        const price = req.body.price
        const imageUrl = req.body.imageUrl

        if(!name){
            throw new Error("Digite o nome!")

        } else if(!price){
            throw new Error("Digite o email!")

        } else if(!imageUrl){
            throw new Error("Digite o senha!")
            
        }

        const result = createPostProducts(
            name,
            price,
            imageUrl
        )
        
        res.status(200).send("Produto criado com sucesso!!");
    } catch (error : any){
        res.status(400).send(error.sqMessage || error.message)
    }
}