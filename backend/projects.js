const express = require('express')
const app = express();
const fs=require("fs");
const cors=require("cors")
app.use(express.json());
app.use(cors())
app.get('/projects',function(req,res){
    fs.readFile('./projects.json',function(err,data){
        //console.log(JSON.parse(data.toString()))
        if(err){
            console.log(err);
        }
        res.send(data.toString())
        
    })

})

app.listen(3009)