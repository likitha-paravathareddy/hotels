const express =require('express')
const app = express();
let cookieParser=require('cookie-parser')
app.use(cookieParser());

const practiceModelCtrl=require('../models/practiceModel')

async function practiceRegistrationController(req,res){
    let practiceData=practiceModelCtrl.practiceModel({
        username:req.body.username,
        password:req.body.password    
    })
    practiceData.save((err,result)=>{
        if(err){
            res.send("Error")
        }
        else{
            res.send("page sent Successfully")
        }
    })
}

async function practiceDataFetching(req,res){
    practiceModelCtrl.practiceModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}
global.tk;
function generateNewToken(){
    return Math.random().toString(12)
}
async function practiceDataLogin(req,res){
    practiceModelCtrl.practiceModel.find({username:req.body.username,password:req.body.password},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            if (docs)
            {
                token=generateNewToken();
                console.log(token)
                global.tk=token;
                res.cookie("userAuth",token);
                res.send(req.cookies);
            }
            else{
                global.tk=""
                res.send("authentication failed")
            }
        }
    })

}
async function getAcessDate(req,res){
    console.log(req.cookies)
    tok=req.cookies
    if(tok==global.tk){
        res.send("got access")
    }
    else{
        res.send("access denied")
    }
}

module.exports={ practiceRegistrationController , practiceDataFetching ,practiceDataLogin,getAcessDate}