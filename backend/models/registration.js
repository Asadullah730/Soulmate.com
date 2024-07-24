const mongoose  = require ('mongoose');
const registrationSchema = new mongoose.Schema({
    name : String,
    fatherName: String,
    age : Number,
    city :String,
    sibling : Number,
    phoneNo : String,
    gender : String,
    religion : String,
    cast :String,
})

const registrationModel = mongoose.model("registration", registrationSchema);
console.log ("Schema Running SuccessFully")
module.exports = registrationModel;