const express = require('express');
const employeesModel = require('../models/employees.model');

const router = express.Router();

router.get('/employees',(req,res)=>{
    
try{
employeesModel.find((err,data)=>{
    if(err){
        return res.status(400).send({message:'Error while retriving employees. please check the data'})
    }
res.status(200).send(data);
});
}catch(error){
    res.status(500).send({
message: 'Internet Server Error'
    })
}
});

router.post('/employees',(req,res)=>{

});


router.put('/employees/:empID',(req,res)=>{

});

router.delete('/employees/:empID',(req,res)=>{

});


module.exports = router;