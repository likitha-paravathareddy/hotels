const blogModelCtrl=require('../models/blogmodel')

async function blogRegistrationController(req,res){
    console.log(req.body)
    let blogData=blogModelCtrl.blogModel({
        blogtitle:req.body.blogtitle,
        authname:req.body.authname,
        blogbody:req.body.blogbody,
    });

    blogData.save((err,result) =>{
        if(err){
            res.send("error")
        }
        else{
            res.send("blog added successfully")
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


module.exports={ blogRegistrationController,blogDataFetching }

