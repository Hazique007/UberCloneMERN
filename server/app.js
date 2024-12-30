const dotenv = require('dotenv');
dotenv.config();
const express = require ('express');
const app = express ();
const cors = require('cors');
app.use(cors());
const ConnecttoDB = require('./db/db');
const userRoute = require('./Routes/userRoutes');

ConnecttoDB();



app.get('/',(req,res)=>{
res.send("Hello nigags")
});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/users',userRoute);



module.exports=app;