const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const healthServiceManagerSchema = new Schema({
    nit:{type:String, required:true},
    code:{type:String},
    name:{type:String, required:true}
},{
    timestamps:true
});

module.exports =mongoose.model('healthServiceManager',healthServiceManagerSchema);
