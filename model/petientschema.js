const mongoose = require('mongoose') 
const Schema = mongoose.Schema

const PatientSchema = new Schema ({
    Name : {
        type:String,
        required:[true,"Name required"],
    },
    Email:{
        type:String,
        required:[true,"Email required"]
    },
    Discription :{
        type: String,
        required:[true,"Discription required"]
    },
    Status :{
        type:String,
        required:[true,"Status required"],
    },
    BloodType:{
        type:String,
        required:[true,"Blood type required"],
    }
});

module.exports=mongoose.model('PatientDetails',PatientSchema)

