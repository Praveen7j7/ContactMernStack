import express from 'express'
import { getAllUsers } from '../controller/userController.js'

let userRoutes=express.Router()

//For Fetching get Routes
userRoutes.get("/", getAllUsers)

export default userRoutes


