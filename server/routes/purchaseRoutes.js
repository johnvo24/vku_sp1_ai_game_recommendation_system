import express from 'express';
import purchaseController from '../controllers/purchaseController.js';

const router = express.Router();

// Route to create a new purchase
router.post('/purchases', purchaseController.createPurchase);

// Route to get all purchases
router.get('/purchases', purchaseController.getAllPurchases);

// Route to get a purchase by id
router.get('/purchases/:id', purchaseController.getPurchaseById);

// Route to update a purchase by id
router.put('/purchases/:id', purchaseController.updatePurchase);

// Route to delete a purchase by id
router.delete('/purchases/:id', purchaseController.deletePurchase);

export default router;
