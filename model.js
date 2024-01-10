const mongoose = require('mongoose');
const empSchema = new mongoose.Schema({
    email :{
        type :String,
        require :true,
        unique :true,
    },
    password :{
        type: String,
        required: true,
        unique :true,
    },
    cpassword :{
        type: String,
        required: true,
        unique: true,
    }
});

const empCollection = new mongoose.model('empcollection', empSchema);
module.exports = empCollection;


