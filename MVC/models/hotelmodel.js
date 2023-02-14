const db=require('./conn').db
const mongoose=require('./conn').mongoose

const hotelSchema=mongoose.Schema({
    hotel_name:{
        type:String
    },
    no_of_people:{
        type:Number
    },
    dropsel:{
        type:Number
    },
    from_date:
    {
        type:Date
    },
    to_date:
    {
        type:Date
    },
    email:{
        type:String
    },
    status:{
        type:String
    }
})

let hotelModel=mongoose.model('hotels',hotelSchema)
module.exports={hotelModel}