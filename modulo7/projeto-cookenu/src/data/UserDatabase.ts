import { user } from "../model/user"
import { BaseDatabase } from "./BaseDatabase"
import { CustomError } from "../error/customError";

export class UserDatabase extends BaseDatabase {
     private TABLE_NAME = "cookenu_users"

     public insertUser = async (user: user) => {
        try{
            await UserDatabase.connection
                .insert({
                    id: user.id,
                    email: user.email,
                    password: user.password
                }) 
                .into(this.TABLE_NAME);
        } catch(error: any) {
            throw new CustomError(400, error.message);
        }
     }

     public findUserEmail = async (email: string) => {
        try{
            const result = await UserDatabase.connection(this.TABLE_NAME)
                .select()
                .where({email})
            return result[0]
        } catch(error: any) {
            throw new CustomError(400, error.message);
        }
     }

     public findUser = async(id: string) =>{
        try{
            const result = await UserDatabase.connection(this.TABLE_NAME)
            .select()
            .where({id: id})
            return result[0]
        }catch(error: any) {
            throw new CustomError(400, error.message);
        }
     }
}