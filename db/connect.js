const mongoose = require('mongoose');

db = async () => {

    try{
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Db connection established.')
    }catch(error){
        console.log('DB Error:', error);
    }
}

module.exports = db;