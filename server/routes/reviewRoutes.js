import express from 'express';
import reviewController from '../controllers/reviewController.js';

const router = express.Router();

// Route to create a new review
router.post('/reviews', reviewController.createReview);

// Route to get all reviews
router.get('/reviews', reviewController.getAllReviews);

// Route to get a review by id
router.get('/reviews/:id', reviewController.getReviewById);

// Route to update a review by id
router.put('/reviews/:id', reviewController.updateReview);

// Route to delete a review by id
router.delete('/reviews/:id', reviewController.deleteReview);

export default router;
