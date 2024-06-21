const mongoose= require("mongoose");

const todo=new mongoose.Schema({
    description:{
        type:String,
        required:[true,"description is required"],
        minlength:[4,"The description is too short"]
    }
},{timestamps:true});
const Todo=mongoose.model('Todo',todo);
exports.Todo=Todo;
