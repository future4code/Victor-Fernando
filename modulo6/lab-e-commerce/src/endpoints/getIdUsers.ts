import { Request, Response }  from "express";
import connection from "../data/connection";
import { users } from "../types";
import { findGetUsers } from "./querys/findGetUsers"

export async function getIdUsers(
    req: Request,
    res: Response
): Promise<void> {
    try{
        
        const idUser = Number(req.params.id)
        

        const result = await findGetUsers(idUser)
        

        res.status(200).send(result);
    } catch (error : any){
        res.status(400).send(error.sqMessage || error.message)
    }
}

const toUsers = (input: any): users => {
    return{
        id: input.id,
        name: input.name,
        email: input.email
    }
}