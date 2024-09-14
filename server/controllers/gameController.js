import Game from '../models/Game.js';
import Platform from '../models/Platform.js';
import Genre from '../models/Genre.js';

const gameController = {
    createGame: async (req, res) => {
        const {
            platform_id,
            game_name,
            game_desc,
            game_image,
            game_dev,
            game_pub,
            game_release,
            game_price,
            game_genres,
            created_at,
            updated_at
        } = req.body;

        try {
            const platform = await Platform.findById(platform_id);
            if (!platform) {
                return res.status(404).json({ message: 'Platform not found' });
            }

            const genres = await Genre.find({ _id: { $in: game_genres } });
            if (genres.length !== game_genres.length) {
                return res.status(404).json({ message: 'One or more genres not found' });
            }

            const newGame = new Game({
                platform_id,
                game_name,
                game_desc,
                game_image,
                game_dev,
                game_pub,
                game_release,
                game_price,
                game_genres,
                created_at,
                updated_at
            });

            await newGame.save();
            res.status(201).json(newGame);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getAllGames: async (req, res) => {
        try {
            const games = await Game.find().populate('platform_id').populate('game_genres');
            res.status(200).json(games);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getGameById: async (req, res) => {
        const { id } = req.params;

        try {
            const game = await Game.findById(id).populate('platform_id').populate('game_genres');
            if (!game) {
                return res.status(404).json({ message: 'Game not found' });
            }
            res.status(200).json(game);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    updateGame: async (req, res) => {
        const { id } = req.params;
        const {
            platform_id,
            game_name,
            game_desc,
            game_image,
            game_dev,
            game_pub,
            game_release,
            game_price,
            game_genres,
            created_at,
            updated_at
        } = req.body;

        try {
            const platform = await Platform.findById(platform_id);
            if (!platform) {
                return res.status(404).json({ message: 'Platform not found' });
            }

            const genres = await Genre.find({ _id: { $in: game_genres } });
            if (genres.length !== game_genres.length) {
                return res.status(404).json({ message: 'One or more genres not found' });
            }

            const updatedGame = await Game.findByIdAndUpdate(id, {
                platform_id,
                game_name,
                game_desc,
                game_image,
                game_dev,
                game_pub,
                game_release,
                game_price,
                game_genres,
                created_at,
                updated_at
            }, { new: true });

            if (!updatedGame) {
                return res.status(404).json({ message: 'Game not found' });
            }
            res.status(200).json(updatedGame);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    deleteGame: async (req, res) => {
        const { id } = req.params;

        try {
            const deletedGame = await Game.findByIdAndDelete(id);
            if (!deletedGame) {
                return res.status(404).json({ message: 'Game not found' });
            }
            res.status(200).json({ message: 'Game deleted successfully' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    
    searchByKeyword: async (req, res) => {
        const { keyword } = req.query;

        try {
            const games = await Game.find({ 
                game_name: { $regex: new RegExp(keyword, 'i') }
            }).populate('platform_id').populate('game_genres');
            res.status(200).json(games);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    searchByGenres: async (req, res) => {
        const { genre_names } = req.query;

        try {
            const genres = await Genre.find({ genre_name: { $in: genre_names } });
            const genreIds = genres.map(genre => genre._id);

            const games = await Game.find({ game_genres: { $all: genreIds } })
                                    .populate('platform_id')
                                    .populate('game_genres');
            
            res.status(200).json(games);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

export default gameController;
