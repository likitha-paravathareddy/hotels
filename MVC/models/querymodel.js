const db=require('./conn').db
const mongoose=require('./conn').mongoose

const querySchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    subject:{
        type:String
    },
    message:{
        type:String
    }
})

let queryModel=mongoose.model('queries',querySchema)
module.exports={queryModel}