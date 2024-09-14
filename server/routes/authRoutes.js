import express from 'express';
import authController from '../controllers/authController.js';

const router = express.Router();

// Route to search a game by keyword
router.post('/login', authController.login);


export default router;
