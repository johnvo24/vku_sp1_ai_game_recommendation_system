import express from 'express'
import cors from 'cors'
import db from './db/database.js'
import dotenv from 'dotenv'
import gameRoutes from './routes/gameRoutes.js'
import platformRoutes from './routes/platformRoutes.js'
import userRoutes from './routes/userRoutes.js'
import purchaseRoutes from './routes/purchaseRoutes.js'
import reviewRoutes from './routes/reviewRoutes.js'
import wishlistRoutes from './routes/wishlistRoutes.js'
import authRoutes from './routes/authRoutes.js'
import genreRoutes from './routes/genreRoutes.js';

import JH from './utils/helper.js'

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT;

db.connect()
app.use(express.json())
app.use(cors());

// Use routes
app.use('/api', gameRoutes);
app.use('/api', platformRoutes);
app.use('/api', userRoutes);
app.use('/api', purchaseRoutes);
app.use('/api', reviewRoutes);
app.use('/api', wishlistRoutes);
app.use('/api', authRoutes);
app.use('/api', genreRoutes);

app.listen(process.env.PORT, process.env.HOST,() => {
    console.log(`Server listening on port: ${PORT}`);
})