const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const tripSchema = new Schema({
    name:{type:String, required:true},
    description:{type:String},
    destination:{type:String, required:true},
    category:{type:String, enum:['familiar','amigos','trabajo']},
    start_date:{type:Date, required:true},
    end_date:{type:Date}
},{
    timestamps:true
});

module.exports =mongoose.model('trip',tripSchema);
