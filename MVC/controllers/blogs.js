const blogModelCtrl=require('../models/blogModel')

const multer=require('multer')

var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./images");
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
})
var upload=multer({storage:storage}).single("image")
async function blogRegistrationController(req,res){
  
    let blogData=blogModelCtrl.blogModel({
        title:req.body.title,
        name:req.body.name,
        img:"MVC/images/"+req.file.filename,
        body:req.body.data,
        date:new Date(),
        views:0,
        likes:0
    });
    blogModelCtrl.blogModel.find({ body:req.body.data,name:req.body.name }).then((resp) => {
        if (resp.length != 0) {
            res.send("1")
        }
        else {
            blogData.save((err, result) => {
                if (err) {
                    res.send("something went wrong")
                }
                else {
                    res.send("blog added succesfully")
                }
            })
        }
    })
}

async function blogDataFetching(req,res){
    blogModelCtrl.blogModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}
function blogDataUpdating(req,res){
    console.log(req.body.blogimg)
    blogModelCtrl.blogModel.updateOne({img:req.body.blogimg},{$set:{"likes":req.body.num+1}},(err,docs)=>{
        if(err){
            res.send("something went wrong")
        }
        else{
            res.send("Approved")
        }
    })
} 

function blogDataViewUpdating(req,res){
    console.log(req.body)
    blogModelCtrl.blogModel.updateOne({img:req.body.blogimage},{$set:{"views":req.body.nums+1}},(err,docs)=>{
        if(err){
            res.send("something went wrong")
        }
        else{
            res.send("Approved")
        }
    })
} 

module.exports={ blogRegistrationController , blogDataFetching,upload ,blogDataUpdating,blogDataViewUpdating}