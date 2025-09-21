import express from 'express';
import {removeUser} from '../controller/removeController.js' // make sure this is your delete function

const deleteRoutes = express.Router();

// Route to delete a user by ID
// You can pass ID in body or params; here we use body
deleteRoutes.delete("/:id", removeUser);

export default deleteRoutes;
