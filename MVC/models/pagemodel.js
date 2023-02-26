const db=require('./conn').db
const mongoose=require('./conn').mongoose

const pageSchema=mongoose.Schema({  
    name:{
        type:String
    },   
    bread1:{
        type:String
    },
    bread2:{
        type:String
    },
    hotelimg1:{
        type:String
    },
    hotelimg2:{
        type:String
    },
    hotelimg3:{
        type:String
    },
    hoteldata:{
        type:String
    }

})

let pageModel=mongoose.model('pages',pageSchema)
module.exports={pageModel}