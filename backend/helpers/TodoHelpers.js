const {Todo}=require('../models/todo.model.js');
exports.createTodo= async({desc})=>{
if(!desc)
  {
    const err= new Error("This is cannot be empty");
    throw err;
  }
const todo = new Todo({ description: desc });const data = await todo.save();
return data;
}
exports.updateTodo=async({id,desc})=>{

  if (id === undefined || desc === undefined) {
    console.log("insuficient");
    throw new Error("insufficient data");
  }
  const data=await Todo.findByIdAndUpdate({ _id: id }, { $set: { description: desc } },{runValidators:true});
  console.log("record updated");
  return data; 
}
exports.deleteTodo=async({id})=>{
  if (id === undefined) {
    console.log("the id is not present");
    throw new Error("the id field is missing or it is not a number");
  }
  const data = await Todo.findByIdAndDelete({ _id: id })
  if (data == null) {
    throw new Error("Todo doesnot exists");
}
}
