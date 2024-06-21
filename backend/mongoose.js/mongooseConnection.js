const mongoose=require('mongoose');
exports.mongooseConnect=async()=>{
try{
    await mongoose.connect(process.env.URL)
    console.log("Moogose has connected to the database");
}
catch(e){
    console.log(e);
}
}