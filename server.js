//Globar Imports
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
const logger = require("morgan")
//Global Middlewares
app.use(express.json())
app.use(cors());
app.use(logger('dev'))
dotenv.config();

const Port = process.env.PORT || 5000;

//Importing Routes
const authRoute = require('./routes/authRoute/auth.route')

//Implementing Routes
app.use('/api/v1/user',authRoute)

app.get('/',(req,res)=>{
    res.status(200).json({
        status : "success",
        message : "Welcome"
    })
})

app.listen(Port,()=>{
    console.log(`Server is up and running at ${Port}`)
})