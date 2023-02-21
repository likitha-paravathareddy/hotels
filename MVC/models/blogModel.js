const db=require('./conn').db
const mongoose=require('./conn').mongoose

const blogSchema=mongoose.Schema({
    title:{
        type:String
    },
    name:{
        type:String
    },
    img:{
        type:String
    },
    body:{
        type:String
    },
    date:{
        type:Date
    },
    views:{
        type:Number
    },
    likes:{
        type:Number
    }

})

let blogModel=mongoose.model('myblogs',blogSchema)
module.exports={blogModel}