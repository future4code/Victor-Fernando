import cors  from "cors"
import  express, { Request, Response }  from "express"
import { afazeres } from "./data"
import { v4 as geraId } from "uuid"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando...")
})

app.get("/ping", (req, res) => {
    res.status(201).send("Pong!")
})

app.get("/status", (req: Request, res: Response) => {
    const status = req.body.completed

    const filtraStatus = afazeres.filter((index:any )=> {return index.completed === status})

    res.status(200).send(filtraStatus)
})

app.post("/afazer", (req: Request, res: Response) => {
    const title = req.body.title
    const completed = req.body.completed

    type Tipos = {
        id: any,
        title: string,
        completed: boolean
    }

    const newAfazer: Tipos = {
        "id": geraId(),
        "title": title,
        "completed": completed
    }

    if(!title || !completed){
        res.status(400).send("Favor informar title e completed np body.")
        return
    }

    // afazeres.push(newAfazer)

    // const filtraStatus = afazeres.filter((index:any )=> {return index.completed === status})

    afazeres.push(newAfazer)
    console.log(afazeres)
    res.status(200).send("ok")
})