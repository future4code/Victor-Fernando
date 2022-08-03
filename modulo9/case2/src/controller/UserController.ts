import { UserBusiness } from "../business/UserBusiness"
import { Request, Response } from "express";
import { CustomError } from "../error/customError"
import { UserInputDTO } from "../model/user";

const userBusiness = new UserBusiness()

export class UserController {

    public signup = async (req: Request, res: Response) => {
        try {
            const input: UserInputDTO = {
                nome: req.body,
                email: req.body,
                password: req.body
            }

            const token = await userBusiness.signup(input)

            res.status(201).send({ message: "Usuário criado!" , token })
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}