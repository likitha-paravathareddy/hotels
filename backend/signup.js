const express=require('express');
const { fstat, writeFileSync } = require('fs');
const multer=require('multer')
const app=express()
app.post('/demo',multer().single('pic'),(req,res)=>{
    console.log(req.file);
    writeFileSync('./'+req.file.originalname,req.file.buffer);
})

app.listen(4004);