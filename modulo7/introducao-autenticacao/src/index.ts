// 1

//// A) Eu discordava apouco tempo ater perceber as vantagens. Sim.

//// B)  

import {v4 as geradorId} from "uuid"

export const geraId = () => {
    return geradorId()
}


// 2

//// A) Ele tipa como string, garantido que o vier se torne uma string.

//// B) 

import * as jwt from "jsonwebtoken"

const expiresIn = "1min"
const generateToken:any = (input: AuthenticationData): string => {
    const token = jwt.sign(
        {
          id: input.id,
        },
        process.env.JWT_KEY as string,
        {
          expiresIn
        }
      );
      return token;
    
}
  
  type AuthenticationData = {
    id: string;
}