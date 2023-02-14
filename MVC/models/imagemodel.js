const db=require('./conn').db
const mongoose=require('./conn').mongoose

const imageSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    phno:{
        type:Number
    },
     img:
    {
        type:String
    },

})

let imageModel=mongoose.model('images',imageSchema)
module.exports={imageModel}