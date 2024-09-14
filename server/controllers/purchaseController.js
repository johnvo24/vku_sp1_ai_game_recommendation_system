import Purchase from '../models/Purchase.js';

const purchaseController = {
    createPurchase: async (req, res) => {
        const { user_id, game_id, payment_method, purchase_status } = req.body;

        try {
            const newPurchase = new Purchase({ user_id, game_id, payment_method, purchase_status });
            await newPurchase.save();
            res.status(201).json(newPurchase);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getAllPurchases: async (req, res) => {
        try {
            const purchases = await Purchase.find().populate('user_id').populate('game_id');
            res.status(200).json(purchases);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getPurchaseById: async (req, res) => {
        const { id } = req.params;

        try {
            const purchase = await Purchase.findById(id).populate('user_id').populate('game_id');
            if (!purchase) {
                return res.status(404).json({ message: 'Purchase not found' });
            }
            res.status(200).json(purchase);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    updatePurchase: async (req, res) => {
        const { id } = req.params;
        const { user_id, game_id, payment_method, purchase_status } = req.body;

        try {
            const updatedPurchase = await Purchase.findByIdAndUpdate(id, { user_id, game_id, payment_method, purchase_status }, { new: true });
            if (!updatedPurchase) {
                return res.status(404).json({ message: 'Purchase not found' });
            }
            res.status(200).json(updatedPurchase);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    deletePurchase: async (req, res) => {
        const { id } = req.params;

        try {
            const deletedPurchase = await Purchase.findByIdAndDelete(id);
            if (!deletedPurchase) {
                return res.status(404).json({ message: 'Purchase not found' });
            }
            res.status(200).json({ message: 'Purchase deleted successfully' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

export default purchaseController;
