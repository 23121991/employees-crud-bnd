const express = require('express');
const Employees = require('../models/employees.model');

const router = express.Router();

router.get('/employees', (req, res) => {
   
    try{
        Employees.find((err, data) => {
            if(err){
                return res.status(400).send({message: 'Error while retrieving employees. Please check the data'})
            }

            res.status(200).send(data);
        })
    }catch(error){
        res.status(500).send({
            message: 'Internal Server Error'
        })
    }
});


router.post('/employees', (req, res) => {
    try {
        
    } catch (error) {
        
    }

});


router.put('/employees/:empID', (req, res) => {
    try {
        
    } catch (error) {
        
    }

});

router.delete('/employees/:empID', (req, res) => {
    try {
        
    } catch (error) {
        
    }

});


module.exports = router ;