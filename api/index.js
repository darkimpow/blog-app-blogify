const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const {json} = require("express");
const salt = bcrypt.genSaltSync(10);
const secret = 'aaondswoie3243';
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require ('multer');
const  uploadMiddleware = multer({dest: 'uploads/'});

app.use(cors({credentials:true,origin:'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());

//post for registration
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

//post for login information
app.post('/login', async (req,res)=> {
const{username,password} =req.body;
const userDoc = await User.findOne({username});
const passOk= bcrypt.compareSync(password, userDoc.password);
if (passOk){
    //logged in
    jwt.sign({username, id: userDoc._id}, secret, {}, (err,token) => {
    if (err) throw err;

    res.cookie('token',token).json({
        id:userDoc._id,
        username,
    });
    });
}else {
    res.status(400).json('wrong credentials');
}
});

app.get('/profile',(req,res ) =>{
const {token}= req.cookies;
jwt.verify(token, secret, {}, (err,info ) => {
if (err) throw err;
res.json(info);
});
});

app.post('/logout',(req,res) => {
    res.cookie('token', '').json('ok');
});

app.post('/post',uploadMiddleware.single('file'), (req,res) =>{
res.json(req.file);
});
app.listen(4000);




