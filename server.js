const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const Port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.status(200).json({
        status : "success",
        message : "Welcome"
    })
})

app.listen(Port,()=>{
    console.log(`Server is up and running at ${Port}`)
})