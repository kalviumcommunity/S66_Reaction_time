const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const UserModel = require('./model/userModel');
const userRoutes = require('./routes/userRoutes');
const timeRoutes = require('./routes/timeRoutes')

require('dotenv').config();

app.use(express.json());

let dbConnectionStatus = 'Disconnected'

mongoose.connect(process.env.mongoURI)
    .then(() => {
        dbConnectionStatus = 'Connected'
        console.log("Successfully connected to MongoDB");
    })
    .catch((error) => {
        console.log(error);
        dbConnectionStatus = `Error: ${error.message}`
    });

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the ASAP project",
        dbStatus: dbConnectionStatus
    })
})

app.get('/ping', (req, res) => {
    res.send('pong');
});

// replaces by usercontroller

// app.post('/create', async(req,res)=>{
//     const{name,email,password}= req.body;
//     payload={name,email,password};
    
//     try {
//         let newUser = new UserModel(payload);
//         await newUser.save();
//     } catch (error) {
//         console.log(error);
//         res.send({error:"error"})
//     }
// });

app.use('/user', userRoutes);
app.use('/time', timeRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});