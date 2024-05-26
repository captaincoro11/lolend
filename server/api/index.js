const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { connectDatabase } = require('./db');
const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/task');
const cors = require('cors')


dotenv.config({});

connectDatabase();
app.use(cors());
app.use(express.json())
app.use('/user',userRoutes)
app.use('/task',taskRoutes)


const port = process.env.port || 5000;

app.get('/',(req,res)=>{
    res.json("HELLO BABY")
})




app.listen(port,()=>{
    console.log(`It started on ${port}`)
})
