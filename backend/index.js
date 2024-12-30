import express from "express"
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose";
import emojiStoryRoute from "./routes/emojiStoryRoute.js";
import cors from 'cors'
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Hello..')
})

app.use('/emojiStories', emojiStoryRoute)

mongoose.connect(mongoDBURL).then(() => {
    console.log('App connected to database')
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`)
    })

})
.catch((error) => {
    console.log(error)
})