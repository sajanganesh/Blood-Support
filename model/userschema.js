const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema ({
    Name :{
        type:String,
        required:[true,"Name required"],
    },
    Email :{
        type:String,
        required:[true,"Email required"]
    },
    Password :{
        type:String,
        required:[true,"Password required"]
    },
    BloodGroup :{
        type:String,
        required:[true,"Blood Group required"]
    },
    AvailableStatus:{
        type:Boolean,
        required:[true,"Status required"]
    }
})

module.exports=mongoose.model('UserDetails',UserSchema)