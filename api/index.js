const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.post('/register', (req,res) =>{
const {username,password} =req.body;
res.json({requestData:{username,password}});

});
app.listen(4000);
//mongodb+srv://darkimpowell:j6r7SEwEVEKJSbt1@cluster1.ucvvlej.mongodb.net/?retryWrites=true&w=majority
//j6r7SEwEVEKJSbt1



