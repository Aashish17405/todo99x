const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://******:*******@cluster0.muslifi.mongodb.net/test");

const todoSchema = mongoose.Schema({
    userId:String,
    todo:String,
    completed:{
        type:Boolean,
        default:false}
});

const todo=mongoose.model('todos',todoSchema);

module.exports ={
    todo
};
