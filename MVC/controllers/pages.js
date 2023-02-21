const pageModelCtrl=require('../models/pagemodel')

async function pageRegistrationController(req,res){
    console.log(req.body)
    let pageData=pageModelCtrl.pageModel({

        name:req.body.name,
        bread1:req.body.bread1,
        bread2:req.body.bread2,
        hotelimg1:req.body.hotelimg1,
        hotelimg2:req.body.hotelimg2,
        hotelimg3:req.body.hotelimg3,
        hoteldata:req.body.hoteldata,
    
    })
    pageData.save((err,result)=>{
        if(err){
            res.send("Error")
        }
        else{
            res.send("page sent Successfully")
        }
    })
}

async function pageDataFetching(req,res){
    pageModelCtrl.pageModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}

module.exports={ pageRegistrationController , pageDataFetching }