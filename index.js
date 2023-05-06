import express from "express"
import bodyParser from "body-parser";
import morgan from "morgan"
import dotenv from "dotenv"
import connectDB from "./config/database.js"

const app = express()

dotenv.config()


connectDB()

import orderRouter from "./routing/order.js"


app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



app.use("/practice",practiceRouter)
app.use("/order",orderRouter)
const port = process.env.PORT
app.listen(port, console.log(`server started at ${port}`))




