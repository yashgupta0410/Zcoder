const mongoose = require("mongoose");

const connectdb = async() => {
    try{
       await mongoose.connect("mongodb://localhost:27017/zcoder")
    }catch (err){
             console.log(err);
    }
}

module.exports = connectdb ;