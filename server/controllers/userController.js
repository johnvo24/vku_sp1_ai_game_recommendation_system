import User from '../models/User.js';
import bcrypt from 'bcrypt';

const userController = {
    createUser: async (req, res) => {
        const { username, email, phone, address, password, dob } = req.body;

        var hash_password = await bcrypt.hash(password, 10)
        try {
            const newUser = new User({ username, email, phone, address, password:hash_password, dob });
            await newUser.save();
            res.status(201).json(newUser);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getUserById: async (req, res) => {
        const { id } = req.params;

        try {
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    updateUser: async (req, res) => {
        const { id } = req.params;
        const { username, email, phone, address, password, dob } = req.body;

        try {
            const updatedUser = await User.findByIdAndUpdate(id, { username, email, phone, address, password, dob }, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    deleteUser: async (req, res) => {
        const { id } = req.params;

        try {
            const deletedUser = await User.findByIdAndDelete(id);
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

export default userController;
