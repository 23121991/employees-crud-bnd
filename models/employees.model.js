const mongoose =require('mongoose');

//schema definition
const employeeSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
    trim:true
},
email:{
    type:String,
    required:true,
    trim:true
},
address:{
    type:String,
    required:true,
    trim:true

},

designation:{
    type:String,
    required:true
},
mobileNumber:{
    type: String,
    required:true
},
bloodGroup:{
    type:String
}

});


//model creation

module.exports = mongoose.model('employees',employeeSchema);