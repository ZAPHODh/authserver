import express from 'express'
import router from './routes/userRouter'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors, { CorsOptions } from 'cors'
dotenv.config({ path: '../.env' })

const app = express()
const corsOptions: CorsOptions = {
    origin:
        process.env.NODE_ENV === 'development?'
            ? 'https://localhost:3000'
            : 'https://portifolio-luis.netlify.app',
    credentials: true,
}
mongoose.connect(process.env.MONGO_CONNECT, (err) => {
    if (err) throw err
})
app.use(cors(corsOptions))
app.use('/user', express.json(), router)

app.listen(process.env.PORT, () => {
    console.log(`Server running`)
})
