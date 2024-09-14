import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema({
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
    payment_method: {
        type: String,
        required: true
    },
    purchase_status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

export default Purchase;
