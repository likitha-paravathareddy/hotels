const db=require('./conn').db
const mongoose=require('./conn').mongoose

const practiceSchema=mongoose.Schema({

    username:{
        type:String
    },
    password:{
        type:String
    }
})

let practiceModel=mongoose.model('practice',practiceSchema)
module.exports={practiceModel}