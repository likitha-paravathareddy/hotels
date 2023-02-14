const db=require('./conn').db
const mongoose=require('./conn').mongoose

const userSchema=mongoose.Schema({
    name:{
        type:String
    },
    password:{
        type:String
    },
    mail:{
        type:String
    },
    mobileNumber:{
        type:Number
    },
    address:{
        type:String
    },
    image:{
        type:String
    }
})

let userModel=mongoose.model('users',userSchema)
module.exports={userModel}