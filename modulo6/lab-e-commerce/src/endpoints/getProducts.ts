import { Request, Response }  from "express";
import connection from "../data/connection";
import { products } from "../types";
import { findGetProducts } from "./querys/findGetProducts"

export async function getProducts(
    req: Request,
    res: Response
): Promise<void> {
    try{
        

        const result = await findGetProducts()
        

        res.status(200).send(result);
    } catch (error : any){
        res.status(400).send(error.sqMessage || error.message)
    }
}