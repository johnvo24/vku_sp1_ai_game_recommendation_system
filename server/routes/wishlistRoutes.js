import express from 'express';
import wishlistController from '../controllers/wishlistController.js';

const router = express.Router();

// Route to create a new wishlist item
router.post('/wishlists', wishlistController.createWishlistItem);

// Route to get all wishlist items
router.get('/wishlists', wishlistController.getAllWishlistItems);

// Route to get a wishlist item by id
router.get('/wishlists/:id', wishlistController.getWishlistItemById);

// Route to update a wishlist item by id
router.put('/wishlists/:id', wishlistController.updateWishlistItem);

// Route to delete a wishlist item by id
router.delete('/wishlists/:id', wishlistController.deleteWishlistItem);

export default router;
