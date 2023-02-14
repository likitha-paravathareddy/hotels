const db=require('./conn').db
const mongoose=require('./conn').mongoose

const placeSchema=mongoose.Schema({
    src:{
        type:String
    },
    name:{
        type:String
    },
    data:{
        type:String
    }
})

let placeModel=mongoose.model('places',placeSchema)
module.exports={placeModel}