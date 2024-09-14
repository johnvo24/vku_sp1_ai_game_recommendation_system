import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

// Route to create a new user
router.post('/users', userController.createUser);

// Route to get all users
router.get('/users', userController.getAllUsers);

// Route to get a user by id
router.get('/users/:id', userController.getUserById);

// Route to update a user by id
router.put('/users/:id', userController.updateUser);

// Route to delete a user by id
router.delete('/users/:id', userController.deleteUser);

export default router;
