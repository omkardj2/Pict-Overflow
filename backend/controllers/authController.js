const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const register = async(req,res)=>{
    try {
        const {username,email,mobileNo, password} = req.body;
        
        if (!username || !password || !email || !mobileNo) {
            return res.status(400).json({ 
                error: "Missing required fields",
                received: req.body 
            });
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                error: "user already exists"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            username,
            email,
            mobileNo,
            password: hashedPassword
        });
        await newUser.save();

        res.status(201).json({
            message: "User registered successfully",
            username: username
        });
    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).json({
            error: "Registration failed",
            message: err.message
        });
    }
}

const login = async (req, res) => {

    let { email, password } = req.body;
    try {
        let existingUser = await userModel.findOne({ email });

        if (!existingUser) {
            return res.status(400).send("User not found");
        }
        
        let isMatch = await bcrypt.compare(password, existingUser.password);
     
        if (!isMatch) {
            return res.status(401).send("Invalid email or password");
        }

        let token = jwt.sign({ email: existingUser.email, userid: existingUser._id }, "aayush");

        res.cookie("token", token);
        res.status(200).json({message:"login successful"});

    } catch (err) {
        res.status(500).send("Error during login");
    }
}

module.exports = {
    register,
    login
};