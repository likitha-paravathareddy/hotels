const express = require('express')
const app = express();
const fs=require("fs");
const cors=require("cors")
app.use(express.json());
app.use(cors())
const multer=require('multer')

var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./");
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
})
var upload=multer({storage:storage}).single("img")
app.get('/images',function(req,res){
    res.send("Hello")
});
app.post('/images',function(req,res){
    upload(req,res, (err)=>{
        if(err){
            console.log(err);
            res.status(404).send("something went wrong!");
        }
        res.send(req.file);
    })

});
app.listen(3400)