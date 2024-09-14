import Review from '../models/Review.js';

const reviewController = {
    createReview: async (req, res) => {
        const { user_id, game_id, rv_rating, rv_cmt } = req.body;

        try {
            const newReview = new Review({ user_id, game_id, rv_rating, rv_cmt });
            await newReview.save();
            res.status(201).json(newReview);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getAllReviews: async (req, res) => {
        try {
            const reviews = await Review.find().populate('user_id').populate('game_id');
            res.status(200).json(reviews);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getReviewById: async (req, res) => {
        const { id } = req.params;

        try {
            const review = await Review.findById(id).populate('user_id').populate('game_id');
            if (!review) {
                return res.status(404).json({ message: 'Review not found' });
            }
            res.status(200).json(review);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    updateReview: async (req, res) => {
        const { id } = req.params;
        const { user_id, game_id, rv_rating, rv_cmt } = req.body;

        try {
            const updatedReview = await Review.findByIdAndUpdate(id, { user_id, game_id, rv_rating, rv_cmt }, { new: true });
            if (!updatedReview) {
                return res.status(404).json({ message: 'Review not found' });
            }
            res.status(200).json(updatedReview);
        } catch (err) {
            res.status500().json({ message: err.message });
        }
    },

    deleteReview: async (req, res) => {
        const { id } = req.params;

        try {
            const deletedReview = await Review.findByIdAndDelete(id);
            if (!deletedReview) {
                return res.status(404).json({ message: 'Review not found' });
            }
            res.status(200).json({ message: 'Review deleted successfully' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

export default reviewController;