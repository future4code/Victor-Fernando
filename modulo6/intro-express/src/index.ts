import  express  from "express"
import cors  from "cors"
import { request } from "http"

const app = express()

app.use(express.json())
app.use(cors())


app.get("/", (request, response) => {
    response.status(201).send("Olá do Expresso")
})

app.listen(3003, () => {
    console.log("Servidor esta rodando...")
})