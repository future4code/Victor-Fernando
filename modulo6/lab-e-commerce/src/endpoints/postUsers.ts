import { Request, Response }  from "express";
import connection from "../data/connection";
import { users } from "../types";
import { v1 as geraId } from 'uuid';
import { createPostUsers } from "./querys/createPostUsers"

export async function postUsers(
    req: Request,
    res: Response
): Promise<void> {
    try{ 
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password

        if(!name){
            throw new Error("Digite o nome!")

        } else if(!email){
            throw new Error("Digite o email!")

        } else if(!password){
            throw new Error("Digite o senha!")
            
        }

        const result = createPostUsers(
            name,
            email,
            password
        )
        
        res.status(200).send("Usuario criado com sucesso!!");
    } catch (error : any){
        res.status(400).send(error.sqMessage || error.message)
    }
}