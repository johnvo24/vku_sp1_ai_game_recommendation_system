import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    game_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
        required: true
    },
    rv_rating: {
        type: Number,
        required: true
    },
    rv_cmt: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

const Review = mongoose.model('Review', reviewSchema);

export default Review;