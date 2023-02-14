const db=require('./conn').db
const mongoose=require('./conn').mongoose

const vendorSchema=mongoose.Schema({
    place:{
        type:String
    },
    name:{
        type:String
    },
    img:{
        type:String
    },
    status:{
        type:String
    }
})

let vendorModel=mongoose.model('vendors',vendorSchema)
module.exports={vendorModel}