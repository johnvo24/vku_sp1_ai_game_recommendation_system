import mongoose  from "mongoose";

const genreSchema = new mongoose.Schema({
    genre_name: {
        type: String,
        required: true,
        unique: true
    }
});

const Genre = mongoose.model('Genre', genreSchema);

export default Genre;
