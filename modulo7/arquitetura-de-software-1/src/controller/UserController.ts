import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";


export class UserController {

  public createUser = async (
      req: Request,
      res: Response
   ) => {
      try {
         const { name, email, password } = req.body
   
         const input = {
            name,
            email,
            password
         }
   
         const userBusiness = new UserBusiness
         userBusiness.createUser(input)
   
         res.status(201).send({ message: "Usuário criado!" })
      } catch (error:any) {
         res.status(400).send(error.message)
      }
   }

   public getUser = async (
    req: Request,
    res: Response
    ) => {
        try {
        
            const userBusiness = new UserBusiness
            const result = await userBusiness.getUser()
        
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

   

}