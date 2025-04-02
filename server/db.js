require("dotenv").config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

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
