import express from 'express';
import { createUser } from '../controller/createController.js';
let createRoutes = express.Router();

// For creating a new user
createRoutes.post("/", createUser);

export default createRoutes;
