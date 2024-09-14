import User from "../models/User.js";
import bcrypt from 'bcrypt';

const authController = {
    login: async (req, res) => {
        const { username, password } = req.body;
    
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ status: "FAIL", message: 'Invalid credentials' });
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ status: "FAIL", message: 'Invalid credentials' });
        }

        res.status(200).json({ status: "OK" });
    }
}

export default authController