const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const dotenv = require("dotenv");

const connectDB = require('./config/mongoose-connection');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// const Post = require('./config/mongoose-connection.js');

const userModel = require('./models/userModel');
const authRouter = require('./routes/auth');

connectDB();

app.use(cors());
app.use(cookieParser());    
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// Serve Swagger documentation at /api/docs
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/auth', authRouter);

// const multer = require("multer");
// const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");

// app.post('/login', async (req, res) => {
//     let { email, password } = req.body;
//     try {
//         let existingUser = await userModel.findOne({ email });
//         if (!existingUser) return res.status(400).send("User not found");
//         let isMatch = await bcrypt.compare(password, existingUser.password);
//         if (!isMatch) return res.status(401).send("Invalid email or password");
//         // JWT Token bana ke cookie mein set karo
//         let token = jwt.sign({ email: existingUser.email, userid: existingUser._id }, "PICT");

//         res.cookie("token", token, {
//             httpOnly: true,
//         });
//         res.redirect('/home');
//     } catch (err) {
//         console.error('Error saving workout:', err.message);
//         res.status(500).send("Error during login");
//     }
// });

app.use('/auth',authRouter);
 
function isLoggedIn(req, res, next) {
    const token = req.cookies.token;
    if (!token) res.redirect("/login")
    try {
        const data = jwt.verify(token, "aayush");
        req.user = data;
        next();
    } catch (err) {
        return res.status(401).send("Invalid or expired token");
    }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Swagger documentation available at http://localhost:${PORT}/api/docs`);
});