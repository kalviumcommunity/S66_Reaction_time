const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./model/userModel');
require('dotenv').config();

app.use(express.json());

mongoose.connect(process.env.mongoURI)
    .then(() => {
        console.log("Successfully connected to MongoDB");
    })
    .catch((error) => {
        console.log(error);
    });


app.get('/ping', (req, res) => {
    res.send('pong');
});

app.post('/create', async(req,res)=>{
    const{name,email,password}= req.body;
    payload={name,email,password};
    
    try {
        let newUser = new UserModel(payload);
        await newUser.save();
    } catch (error) {
        console.log(error);
        res.send({error:"error"})
    }
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});