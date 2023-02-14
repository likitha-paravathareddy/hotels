const db = require('mongoose')
const mongoose=require('./conn').mongoose

const blogSchema=mongoose.Schema({
    blogtitle:{
        type: String
    },
    authname:{
        type: String
    },
    blogbody:{
        type: String
    }
    
})

let blogModel=mongoose.model('blogs',blogSchema)
module.exports={ blogModel }