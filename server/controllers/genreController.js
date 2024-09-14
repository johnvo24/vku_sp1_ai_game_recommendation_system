import Genre from '../models/Genre.js';

const genreController = {
    createGenre: async (req, res) => {
        const { genre_name } = req.body;

        try {
            const newGenre = new Genre({ genre_name });
            await newGenre.save();
            res.status(201).json({ id: newGenre._id, genre_name: newGenre.genre_name });
        } catch (err) {
            // res.status(500).json({ message: err.message });
            res.status(200).json({"error": "error"});
        }
    },

    getAllGenres: async (req, res) => {
        try {
            const genres = await Genre.find();
            res.status(200).json(genres);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getGenreById: async (req, res) => {
        const { id } = req.params;

        try {
            const genre = await Genre.findById(id);
            if (!genre) {
                return res.status(404).json({ message: 'Genre not found' });
            }
            res.status(200).json(genre);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    updateGenre: async (req, res) => {
        const { id } = req.params;
        const { genre_name } = req.body;

        try {
            const updatedGenre = await Genre.findByIdAndUpdate(id, { genre_name }, { new: true });
            if (!updatedGenre) {
                return res.status(404).json({ message: 'Genre not found' });
            }
            res.status(200).json(updatedGenre);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    deleteGenre: async (req, res) => {
        const { id } = req.params;

        try {
            const deletedGenre = await Genre.findByIdAndDelete(id);
            if (!deletedGenre) {
                return res.status(404).json({ message: 'Genre not found' });
            }
            res.status(200).json({ message: 'Genre deleted successfully' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getGenreByName: async (req, res) => {
        const { genre_name } = req.query;
        console.log(genre_name)
        try {
            const genre = await Genre.findOne({ genre_name });
            if (!genre) {
                return res.status(404).json({ message: 'Genre not found' });
            }
            res.status(200).json(genre);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
}

export default genreController;
