const db=require('./conn').db
const mongoose=require('./conn').mongoose

const serviceSchema=mongoose.Schema({
    name:{
        type:String
    },
    service_name:{
        type:String
    },
    email:{
        type:String
    },
    Date_of_service:{
        type:String
    },
    Number_of_days:{
        type:String
    }
})

let serviceModel=mongoose.model('services',serviceSchema)
module.exports={serviceModel}