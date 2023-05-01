const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

 mongoose.connect('mongodb+srv://darkimpowell:j6r7SEwEVEKJSbt1@cluster1.ucvvlej.mongodb.net/?retryWrites=true&w=majority');
app.post('/register', async (req,res) =>{
const {username,password} =req.body;
try{const userDoc = await User.create({username, password: bcrypt.hashSync(password,salt),});
    res.json(userDoc);
} catch (e) {
    console.log(e);
res.status(400).json(e)
}
});
app.listen(4000);
//mongodb+srv://darkimpowell:j6r7SEwEVEKJSbt1@cluster1.ucvvlej.mongodb.net/?retryWrites=true&w=majority
//j6r7SEwEVEKJSbt1



