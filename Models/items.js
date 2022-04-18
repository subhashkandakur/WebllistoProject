const  mongoose = require("mongoose")
const Schema = mongoose.Schema


const UserSchema = new Schema({
    Image:{type:String , required: true},
    Price:{type:Number, required:true },
    discription:{type:String, required: true, unique:true},
   
})

module.exports = mongoose.model('item', UserSchema);
