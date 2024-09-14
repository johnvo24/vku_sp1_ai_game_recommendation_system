import mongoose  from "mongoose";

const gameSchema = new mongoose.Schema({
    platform_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Platform',
        required: true,
    },
    game_name: {
        type: String,
        required: true,
    },
    game_desc: {
        type: String,
        required: true,
    },
    game_image: {
        type: String,
        required: true
    },
    game_dev: {
        type: String,
        required: true,
    },
    game_pub: {
        type: String,
        required: true,
    },
    game_release: {
        type: Date,
        required: true,
    },
    game_price: {
        type: Number,
        required: true,
    },
    game_genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],
    created_at: {
        type: Date,
        required: true,
    },
    updated_at: {
        type: Date,
        required: true,
    },
});

const Game = mongoose.model('Game', gameSchema);

export default Game;
