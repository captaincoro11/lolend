const express= require('express');
const app = express.Router();
const {register , login,logout} = require('../controllers/user')

app.post('/register',register);
app.post('/login',login);

app.post('/logout',logout);



module.exports = app;
