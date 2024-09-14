import mongoose from 'mongoose';

const db = {
    // _note_ > Function
    connect: async (callback) => {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("[JV] Connected to database");
            
            // Call callback function
            if (callback) callback();
        } catch (err) {
            console.log(`[JV] Error connecting to database ${err.message}`);
        }
    }, 

    // _note_ > Function
    disconnect: async (callback) => {
        try {
            await mongoose.disconnect();
            console.log('[JV] Disconnected from database');

            if (callback) callback();
        } catch (err) {
            console.error('[JV] Error disconnecting from database:', err.message);
        }
    },
}

export default db;