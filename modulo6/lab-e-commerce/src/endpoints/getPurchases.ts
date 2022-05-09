import { Request, Response }  from "express";
import connection from "../data/connection";
import { users } from "../types";
import { findGetPurchases } from "./querys/findGetPurchases"

export async function getPurchases(
    req: Request,
    res: Response
): Promise<void> {
    try{
        
        let user_id = req.params.user_id
        
        const result = await findGetPurchases(user_id)
        

        res.status(200).send(result);
    } catch (error : any){
        res.status(400).send(error.sqMessage || error.message)
    }
}