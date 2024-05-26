const express= require('express');
const app = express.Router();
const {dashboard, showAllTasks, deleteData, updateData} = require('../controllers/task');
const { isAuthenticated } = require('../middleware/auth');


app.post('/dashboard',dashboard);
app.get('/getData',showAllTasks);
app.delete('/deleteData/:id',deleteData)
app.put('/updateData/:id',updateData)





module.exports = app;
