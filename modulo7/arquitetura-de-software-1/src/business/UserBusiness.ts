import { v4 as generateId } from "uuid";
import { UserDatabase } from "../data/UserDatabase";
import { user } from "../types/user";

export class UserBusiness {
public createUser = async (input: any) => {
   try {
     const { name, email, password } = input;
 
     if (!name || !email || !password) {
       throw new Error(
         'Preencha os campos "name","nickname", "email" e "password"'
       );
     }
 
     const id: string = generateId();
 
     const userDatabase = new UserDatabase();
     await userDatabase.insertUser({
       id,
       name,
       email,
       password,
     });
   } catch (error: any) {
     throw new Error(error.message);
   }
 };

 public async getUser(): Promise<user[]>{
    try {
    
    
      return await new UserDatabase().getUser()
        

    } catch (error: any) {
        throw new Error(error.message);
    }
 }

}