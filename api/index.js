const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const cors = require("cors");


dotenv.config();

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology:true, dbName: "test"}
);
const jwtSecret = process.env.JWT_SECRET;
const app = express();
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
}))


app.post('/register',async (req,res)=>{
    const {username,password} = req.body;
    try{
        const createdUser = await User.create({username,password});
        jwt.sign({userId:createdUser._id}, jwtSecret,{},(err,token)=>{
            if(err) throw err;
            res.cookie("token", token).status(201).json('ok');
        });
    }catch (err){
        if(err) throw err;
        res.status(500).json("error");
    }
})


app.listen(4040, () =>{
    console.log("Server is running...yadiyola")
})