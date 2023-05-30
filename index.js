const express = require('express');
const db = require('./db/connect');
require('dotenv').config();
const cors = require('cors');
const app = express();

//connecting DB

db();

//import routes
const employeeRoutes = require('./routes/employees.routes');





app.get('/',(req,res)=>{
    res.send('welcome to my MyOrg');
   })


//middlewares
app.use(express.json());
app.use(cors());
app.use("/api",employeeRoutes);



const PORT = process.env.PORT || 4000;



app.listen(PORT,()=>{
    console.log(`App is running on PORT ${PORT}`);
});