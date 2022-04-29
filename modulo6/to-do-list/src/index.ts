import express, {Express, Response, Request} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import connection  from "./connection"

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

app.get("/user/:id",async (req: Request, res: Response): Promise<void> =>{
    try{
        const result = await connection("User").where({
            id: req.params.id
        })
        res.status(200).send(result);
    } catch (error : any){
        res.status(500).send(error.sqMessage || error.message)
    }
})

app.post("/user",async (req: Request, res: Response): Promise<void> =>{
    try{
       await connection("User").insert({
        name: req.body.name,
        nickname: req.body.nickName,
        email: req.body.email
       })

        res.status(200).send({ message: "Criado com sucesso."});
    } catch (error : any){
        res.status(500).send(error.sqMessage || error.message)
    }
})

app.put("/user/edit/:id",async (req: Request, res: Response): Promise<void> =>{
    try{
       await connection("User")
       .update({
        name: req.body.name,
        nickname: req.body.nickName,
        email: req.body.email
       })
       .where({id: req.params.id})
    

        res.status(200).send({ message: "Alterado com sucesso."});
    } catch (error : any){
        res.status(500).send(error.sqMessage || error.message)
    }
})

app.post("/task",async (req: Request, res: Response): Promise<void> =>{
    try{
       await connection("Task").insert({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            creatorUserId: req.body.creatorUserId,
            limitDate: req.body.limitDate
       })

        res.status(200).send({ message: "Criado com sucesso."});
    } catch (error : any){
        res.status(500).send(error.sqMessage || error.message)
    }
})

app.get("/task/:id",async (req: Request, res: Response): Promise<void> =>{
    try{
        const result = await connection("Task").where({
            id: req.params.id
        })
        res.status(200).send(result);
    } catch (error : any){
        res.status(500).send(error.sqMessage || error.message)
    }
})