const mongoose = require("mongoose");
const PoliceSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});
const PoliceModel = mongoose.model("Police",PoliceSchema);
module.exports = PoliceModel;