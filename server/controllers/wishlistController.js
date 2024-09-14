import Wishlist from '../models/Wishlist.js';

const wishlistController = {
    createWishlistItem: async (req, res) => {
        const { user_id, game_id } = req.body;

        try {
            const newWishlistItem = new Wishlist({ user_id, game_id });
            await newWishlistItem.save();
            res.status(201).json(newWishlistItem);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getAllWishlistItems: async (req, res) => {
        try {
            const wishlistItems = await Wishlist.find().populate('user_id').populate('game_id');
            res.status(200).json(wishlistItems);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getWishlistItemById: async (req, res) => {
        const { id } = req.params;

        try {
            const wishlistItem = await Wishlist.findById(id).populate('user_id').populate('game_id');
            if (!wishlistItem) {
                return res.status(404).json({ message: 'Wishlist item not found' });
            }
            res.status(200).json(wishlistItem);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    updateWishlistItem: async (req, res) => {
        const { id } = req.params;
        const { user_id, game_id } = req.body;

        try {
            const updatedWishlistItem = await Wishlist.findByIdAndUpdate(id, { user_id, game_id }, { new: true });
            if (!updatedWishlistItem) {
                return res.status(404).json({ message: 'Wishlist item not found' });
            }
            res.status(200).json(updatedWishlistItem);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    deleteWishlistItem: async (req, res) => {
        const { id } = req.params;

        try {
            const deletedWishlistItem = await Wishlist.findByIdAndDelete(id);
            if (!deletedWishlistItem) {
                return res.status(404).json({ message: 'Wishlist item not found' });
            }
            res.status(200).json({ message: 'Wishlist item deleted successfully' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

export default wishlistController;
