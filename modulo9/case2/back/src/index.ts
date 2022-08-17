import { app } from "./controller/app"
import { cardapioRouter } from "./controller/routes/cardapioRouter"
import { pedidoRouter } from "./controller/routes/pedidoRouter"


app.use('/api', cardapioRouter)

app.use('/api', pedidoRouter)
