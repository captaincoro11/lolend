
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({});
const url = process.env.MONGODB_URI;

exports.connectDatabase = ()=>{
    mongoose.connect(url).then((con)=>console.log(`DataBase Connected ${con.connection.host}`)).catch((error)=>console.log(error))
}