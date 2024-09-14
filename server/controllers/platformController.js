import Platform from "../models/Platform.js";

const platformController = {
    createPlatform: async (req, res) => {
        const { platform_name } = req.body;

        try {
            const newPlatform = new Platform({ platform_name });
            await newPlatform.save();
            res.status(201).json(newPlatform);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getAllPlatforms: async (req, res) => {
        try {
            const platforms = await Platform.find();
            res.status(200).json(platforms);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getPlatformById: async (req, res) => {
        const { id } = req.params;

        try {
            const platform = await Platform.findById(id);
            if (!platform) {
                return res.status(404).json({ message: 'Platform not found' });
            }
            res.status(200).json(platform);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    updatePlatform: async (req, res) => {
        const { id } = req.params;
        const { platform_name } = req.body;

        try {
            const updatedPlatform = await Platform.findByIdAndUpdate(id, { platform_name }, { new: true });
            if (!updatedPlatform) {
                return res.status(404).json({ message: 'Platform not found' });
            }
            res.status(200).json(updatedPlatform);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    deletePlatform: async (req, res) => {
        const { id } = req.params;

        try {
            const deletedPlatform = await Platform.findByIdAndDelete(id);
            if (!deletedPlatform) {
                return res.status(404).json({ message: 'Platform not found' });
            }
            res.status(200).json({ message: 'Platform deleted successfully' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

export default platformController;
