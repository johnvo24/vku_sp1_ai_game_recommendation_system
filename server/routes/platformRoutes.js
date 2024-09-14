import express from 'express';
import platformController from '../controllers/platformController.js';

const router = express.Router();

// Route to create a new platform
router.post('/platforms', platformController.createPlatform);

// Route to get all platforms
router.get('/platforms', platformController.getAllPlatforms);

// Route to get a platform by id
router.get('/platforms/:id', platformController.getPlatformById);

// Route to update a platform by id
router.put('/platforms/:id', platformController.updatePlatform);

// Route to delete a platform by id
router.delete('/platforms/:id', platformController.deletePlatform);

export default router;
