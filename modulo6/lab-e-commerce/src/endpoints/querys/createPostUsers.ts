import connection from "../../data/connection";
import { v1 as geraId } from 'uuid';

export const createPostUsers = async (name:string, email:string, password:string ): Promise<any> => {
    const id = String(geraId())

    const result = await connection("labecommerce_users").insert({
        id: id,
        name: name,
        email: email,
        password: password,
    })
    
}

