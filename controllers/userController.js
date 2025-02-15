const User = require('../models/userModel');

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
        }

        await new User({ name, email, password }).save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
    
        if (!user || user.password !== password) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
    
        res.status(200).json({ message: 'Login successful', userId: user._id });
        } catch (error) {
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
};


