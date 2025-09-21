import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
dotenv.config()
import cors from "cors"
import userRoutes from './routes/userRoutes.js'
import deleteRoutes from './routes/deleteRoutes.js'
import createRoutes from './routes/postRoutes.js'

const port = process.env.PORT || 8000;
let app=express()

app.use(cors({
  origin:["http://localhost:5173"]
}))
app.use(express.json())

app.use("/api/create",createRoutes)
app.use("/api/users",userRoutes)
app.use("/api/delete",deleteRoutes)

app.get('/', (req, res) => {
  res.send('ServerWorking!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connectDb()
})
