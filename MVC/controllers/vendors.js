const vendorModelCtrl=require('../models/vendormodel')

const multer=require('multer')

var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./images");
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
})
var upload=multer({storage:storage}).single("img")

async function vendorRegistrationController(req,res){
    console.log(req.body)
    let vendorData=vendorModelCtrl.vendorModel({
        place:req.body.ids,
        name:req.body.place,
        img:"MVC/images/"+req.file.filename,
        status:"pending",
    });

            vendorData.save((err, result) => {
                if (err) {
                    res.send("something went wrong")
                }
                else {
                    res.send("hotel added succesfully")
                }
            })
        
}

async function vendorDataFetching(req,res){
    vendorModelCtrl.vendorModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}

function vendorDataUpdating(req,res){
    console.log(req.body)
    vendorModelCtrl.vendorModel.updateOne({name:req.body.vendor_name},{$set:{"status":"Approved"}},(err,docs)=>{
        if(err){
            res.send("something went wrong")
        }
        else{
            res.send("Approved")
        }
    })
} 

async function vendorDataUpdatingreg(req,res){
    vendorModelCtrl.vendorModel.updateOne({name:req.body.vendor_name},{$set:{"status":"Rejected"}},(err,docs)=>{
        if(err){
            res.send("something went wrong")
        }
        else{
            res.send("Rejected")
        }
    })
} 



module.exports={ vendorRegistrationController , vendorDataFetching ,upload,vendorDataUpdating,vendorDataUpdatingreg}