const express = require('express');
const app = express();
const {mongooseConnect}=require('./mongoose.js/mongooseConnection');
const cors=require('cors');
require('dotenv').config();
const {TodoRoutes}=require('./routes/todoRoutes');

app.use(cors());
app.use(express.json())
app.use('/todo',TodoRoutes);
mongooseConnect();
app.use('/',(req,res,next)=>{
  res.send({message:'hi'});
})
app.use((err,req,res,next)=>{
  // error.status=err.statusCode||500;
  // error.message=err.message;
  console.log(err);
  res.status(400);
  res.send({
    message:err.message 
  });
});

app.listen(8000,()=>console.log(`server started at port 8000` ));

