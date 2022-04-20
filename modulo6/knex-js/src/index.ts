import express, {Response, Request} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import connection  from "./connection";


const app = express();

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

app.get("/actor", async (req: Request, res: Response): Promise<void> =>{
    try { 

        const result = await connection("Actor")

        res.status(200).send(result);
    } catch (error : any) {
        res.status(500).send(error.sqlMessage || error.massage);
    }
})


app.get("/buscar", async (req: Request, res: Response): Promise<void> =>{
    try { 

        const result = await connection("Actor")
        .where({
            name: req.body.nome
        })

        res.status(200).send(result);
    } catch (error : any) {
        res.status(500).send(error.sqlMessage || error.massage);
    }
})


app.get("/buscar/gender", async (req: Request, res: Response): Promise<void> =>{
    try { 

        const result = await connection("Actor")
       

        res.status(200).send(result);
    } catch (error : any) {
        res.status(500).send(error.sqlMessage || error.massage);
    }
})