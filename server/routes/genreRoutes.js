import express from 'express';
import genreController from '../controllers/genreController.js';

const router = express.Router();

router.get('/genres/get_genre_by_name', genreController.getGenreByName);
router.post('/genres', genreController.createGenre);
router.get('/genres', genreController.getAllGenres);
router.get('/genres/:id', genreController.getGenreById);
router.put('/genres/:id', genreController.updateGenre);
router.delete('/genres/:id', genreController.deleteGenre);


export default router;
