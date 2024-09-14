import express from 'express';
import gameController from '../controllers/gameController.js';

const router = express.Router();

router.get('/games/search_by_genres', gameController.searchByGenres);

// Route to search a game by keyword
router.get('/games/search', gameController.searchByKeyword);

// Route to create a new game
router.post('/games', gameController.createGame);

// Route to get all games
router.get('/games', gameController.getAllGames);

// Route to get a game by id
router.get('/games/:id', gameController.getGameById);

// Route to update a game by id
router.put('/games/:id', gameController.updateGame);

// Route to delete a game by id
router.delete('/games/:id', gameController.deleteGame);



export default router;
