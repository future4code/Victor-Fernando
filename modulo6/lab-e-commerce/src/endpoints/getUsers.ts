import { Request, Response }  from "express";
import connection from "../data/connection";
import { users } from "../types";
import { findGetUsers } from "./querys/findGetUsers"

export async function getUsers(
    req: Request,
    res: Response
): Promise<void> {
    try{
        
        const result = await findGetUsers()
        
        const users = result.map(toUsers)

        res.status(200).send(users);
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