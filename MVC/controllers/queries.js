const queryModelCtrl=require('../models/querymodel')

async function queryRegistrationController(req,res){
    console.log(req.body)
    let queryData=queryModelCtrl.queryModel({
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message
    });
    queryData.save((err,result)=>{
        if(err){
            res.send("Error")
        }
        else{
            res.send("query sent Successfully")
        }
    })
}

async function queryDataFetching(req,res){
    queryModelCtrl.queryModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}

module.exports={ queryRegistrationController , queryDataFetching }