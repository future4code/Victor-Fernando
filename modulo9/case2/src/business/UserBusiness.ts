import { UserDatabase } from "../data/UserDatabase"
import { UserInputDTO } from "../model/user"
import { CustomError, InvalidEmail } from "../error/customError"
import { generateId } from "../services/idGenerator"
import { HashedPassword } from "../services/hashManager"



const userDatabase = new UserDatabase()
const hashedPassword = new HashedPassword()

export class UserBusiness {

    public signup = async (input: UserInputDTO) => {
        try {
            const { nome, email, password } = input

            if(!nome || !email || !password) {
                throw new CustomError(400, "Preencha corretamente os campos nome, email e password")
            }

            if(!email.includes("@")){
                throw new InvalidEmail()
            }

            const id = generateId()
            const hashPassword = await hashedPassword.generateHash(password)

            const user = {
                id,
                nome,
                email,
                password: hashPassword
            }

        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}