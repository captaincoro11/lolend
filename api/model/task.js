const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
   

   status:{
    type:String,
    enum :[
        "IN-PROCESS",
        "PENDING",
        "DONE"
    
    ],
    default:"PENDING"
   },
   DueDate:{
    type:Date,
    default:new Date(Date.now + 24*60*60*1000)
   },
 


});

const Task = mongoose.model("Task",taskSchema);
module.exports = Task

