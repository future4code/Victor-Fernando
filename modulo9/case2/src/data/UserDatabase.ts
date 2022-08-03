import { user } from "../model/user"
import { CustomError } from "../error/customError"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    private TABLE_USERS = "pizzaria_users"
    private TABLE_ENDERECO = "pizzaria_users_endereco"

    public insertUser = async (user: user) => {
        try {
            await UserDatabase.connection
                .insert({ 
                    id: user.id,
                    nome: user.nome,
                    email: user.email,
                    password: user.password
                })
                .into(this.TABLE_USERS)

        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
    public findUserEmail = async (email: string) => {
        try{
            const result = await UserDatabase.connection(this.TABLE_USERS)
            .select()
            .where({email})

            return result[0]
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}