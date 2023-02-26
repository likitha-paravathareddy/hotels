const db=require('./conn').db
const mongoose=require('./conn').mongoose

const flightSchema=mongoose.Schema({
    type:{
        type:String
    },
    from:{
        type:String
    },
    to:{
        type:String
    },
    flightdate:{
        type:String
    },
    costOfPlane:
    {
        type:Number
    }

})

let flightModel=mongoose.model('flightstable',blogSchema)
module.exports={ flightModel }