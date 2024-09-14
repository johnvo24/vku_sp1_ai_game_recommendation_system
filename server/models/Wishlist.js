import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema({
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
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

export default Wishlist;
