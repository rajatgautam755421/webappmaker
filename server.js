const express = require('express');
const app = express();
const Port = process.env.port || 5000;

app.get('/',(req,res)=>{
    res.status(200).json({
        status : "success",
        message : "Welcome"
    })
})

app.listen(Port,()=>{
    console.log(`Server is up and running at ${Port}`)
})