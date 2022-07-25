import {app} from "./app"
import {competicaoRouter} from './controller/routes/competicaoRouter'
import {competidorRouter} from './controller/routes/competidorRouter'


app.use('/competicao', competicaoRouter)
app.use('/competidor', competidorRouter)