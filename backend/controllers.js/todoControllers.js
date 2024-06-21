const { Todo } = require('../models/todo.model');
const { ashandler } = require('./ErrorHandler');
const {createTodo,updateTodo,deleteTodo}=require('../helpers/TodoHelpers.js')
exports.createController = ashandler(async(req, res, next) => {
    const result=await createTodo(req.body);
    res.status(200);
    res.send(result);
})
exports.readController= ashandler(async(req, res, next) => {

  const todos = await Todo.find({});

  res.send(todos);
});
exports.updateController= ashandler(
  async(req, res, next) => {
    const data=await updateTodo(req.body);
    res.send({message:"The todo has been updated",data:data});
  }
)
exports.deleteController = ashandler(async (req, res,next) => {
  const data=await deleteTodo(req.body) 
  res.send({ message: data });
})
