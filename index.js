const express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

const cors = require('cors')
require('dotenv').config()

const app = express();

//ROUTES
const UserRoute = require('./routes/user')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

//MongoDB credentials
const uri = "mongodb+srv://Johnwick:JohnwickAdmin@cluster0.j4cpkfp.mongodb.net/test"
//asynchronous function to connect to mongodb
async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("Connected to db");
    }catch(err){
        console.log(err);
    }
}
//connecting to mongodb
connect();


//ROUTING
app.use('/user',UserRoute);

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`Server started in port ${port}`)
})
