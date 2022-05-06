import { Request, Response }  from "express";
import connection from "../data/connection";
import { purchases } from "../types";
import { createPostPurchases } from "./querys/createPostPurchases"

export async function postPurchases(
    req: Request,
    res: Response
): Promise<void> {
    try{
        const user_id = req.body.userId
        const product_id = req.body.productId
        const quantity = 1

        if(!user_id || !product_id){
            throw new Error("Não esta passando o id!")

        }

        const result = createPostPurchases(
            user_id,
            product_id
        )
        
        res.status(200).send("Produto criado com sucesso!!");
    } catch (error : any){
        res.status(400).send(error.sqMessage || error.message)
    }
}