import { Request, Response } from "express";
import { FollowBusiness } from "../business/FollowBusiness"
import { inputFollowDTO } from "../model/follow"


const followBusiness = new FollowBusiness()

export class FollowController {

    public following = async(req: Request, res: Response) => {
        try {
            console.log("followController")
            const input:inputFollowDTO = {
                idUser: req.params.id,
                idSeguido: req.body.idSeguido,
                token: req.headers.authorization!
            }
 
            await followBusiness.following(input)

            res.status(200).send({message: "Seguindo!"})
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
}