const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const contractSchema = new Schema({
    code:{type:String},
    name:{type:String, required:true}
},{
    timestamps:true
});

module.exports =mongoose.model('contract',contractSchema);
