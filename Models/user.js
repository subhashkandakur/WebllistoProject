const  mongoose = require("mongoose")

const Schema = mongoose.Schema


const UserSchema = new Schema({
    User_Name:{type:String , required: true},
    Phone_Number:{type:Number, required:true },
    email_id:{type:String, required: true, unique:true},
    Password :{type:String},
    role:{type:String, required:true}
})

module.exports = mongoose.model('user', UserSchema);

