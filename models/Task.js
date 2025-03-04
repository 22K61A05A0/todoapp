const mongoose=require("mongoose");
const TaskSchema =new mongoose.Schema({
    text:{type:String,required:true},
    completed:{type:Boolean,default:false},
});

module.exports = mongoose.model("Task",TaskSchema);

// this creates a mongodb collection called tasks with fields text and completed fields.