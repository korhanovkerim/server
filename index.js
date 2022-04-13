import express from "express"
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import donetv from 'dotenv'
import cors from 'cors'
import userRoutes from "./routes/users.js"

const app = express();
donetv.config()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        
    })
})

app.use('/users', userRoutes)

const PORT = process.env.PORT || 5000


mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    app.listen(PORT, () =>{
        console.log(`Server running ${PORT}`)
    })
}).catch((error) =>{
    console.error(error.message)
})