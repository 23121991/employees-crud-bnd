require('dotenv').config();

const express = require('express');
const db = require('./db/connect');

const app = express();

//connecting DB

db();

//import routes
const employeesRoutes = require.apply('./routes/employees.routes');





app.get('/',(req,res)=>{
    res.send('welcome to my MyOrg');
   })


//middlewares
app.use(express.json());

app.use(employeesRoutes);



const PORT = process.env.PORT || 4000;



app.listen(PORT,()=>{
    console.log(`App is running on PORT ${PORT}`);
});