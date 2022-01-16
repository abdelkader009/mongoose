const express = require('express');
const app = express();
app.use(express.json())
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI,(err)=>err ? console.log("ERROR",err) : console.log('database connected'))
//routes
app.use('/api/user',require('./routes/userRoute'))

app.listen(process.env.PORT,(err)=>err ? console.log(err) : console.log('server is runnig'))

