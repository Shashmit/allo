const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();
mongoose.connect(process.env.MONGO_URL);
const app = express();


app.post("/register",(req,res)=>{

})


app.listen(4000, () =>{
    console.log("Server is running...yadiyola")
})