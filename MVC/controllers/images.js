const imageModelCtrl=require('../models/imagemodel')

const multer=require('multer')

var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./images");
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
})
var upload=multer({storage:storage}).single("pic")
async function imageRegistrationController(req,res){


    let imageData=imageModelCtrl.imageModel({
        name:req.body.fname,
        email:req.body.email,
        password:req.body.pwd,
        phno:req.body.phno,
        img:'MVC/images/'+req.file.filename,
    });
  

            imageData.save((err, result) => {
                if (err) {
                    res.send("something went wrong")
                }
                else {
                    res.send("image saved successfully")
                }
            })
        
}

async function imageDataFetching(req,res){
    imageModelCtrl.imageModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}

module.exports={ imageRegistrationController , imageDataFetching,upload }