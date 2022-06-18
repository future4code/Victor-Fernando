import {app} from "./app"
import {userRouter} from './controller/routes/userRouter'
import {postRouter} from './controller/routes/postRouter'


app.use('/user', userRouter)
app.use('/post', postRouter)