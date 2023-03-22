const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema = new Schema({
    uuid : {type:String},
    firstName : {type:String, required:true},
    secondName : {type:String},
    lastname : {type:String},
    surname : {type:String},
    sexo : {type:String,enum:["F","M"]},
    documentNumber : {type:String},
    documentType : {type:String,enum:["CC","RC","TI","MS"]},
    phoneNumber : {type:String},
    address : {type:String},
    membership : [
        {
            code : {type:String},
            documentNumber : {type:String},
            name : {type:String},
            contracts: [
                {
                    code : {type:String},
                    name :{type:String},
                    services :{type:String, enum:["PYP", "MORBILIDAD", "URGENCIAS"]}
                }
            ],
            updateDate:{type:Date},
        }
    ] 
},{
    timestamps:true
});

module.exports =mongoose.model('user',userSchema);
