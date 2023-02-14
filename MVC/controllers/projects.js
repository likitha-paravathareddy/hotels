const projectModelCtrl=require('../models/projectmodel')

async function projectRegistrationController(req,res){
    console.log(req.body)
    let projectData=projectModelCtrl.projectModel({


        name:req.body.name,
        img1:req.body.img1,
        tit1:req.body.tit1,
        img2:req.body.img2,
        tit2:req.body.tit2,
        img3:req.body.img3,
        tit3:req.body.tit3,
        para:req.body.para,
        head2:req.body.head2,
        topicimg1:req.body.topicimg1,
        topic1:req.body.topic1,
        topicimg2:req.body.topicimg2,
        topic2:req.body.topic2,
        topicimg3:req.body.topicimg3,
        topic3:req.body.topic3,
        topicimg4:req.body.topicimg4,
        topic4:req.body.topic4,
        topicimg5:req.body.topicimg5,
        topic5:req.body.topic5,
        topicimg6:req.body.topicimg6,
        topic6:req.body.topic6,
        resortimg1:req.body.resortimg1,
        resort1:req.body.resort1,
        resortimg2:req.body.resortimg2,
        resort2:req.body.resort2,
        resortimg3:req.body.resortimg3,
        resort3:req.body.resort3,
        resortimg4:req.body.resortimg4,
        resort4:req.body.resort4,
        resortimg5:req.body.resortimg5,
        resort5:req.body.resort5,
        resortimg6:req.body.resortimg6,
        resort6:req.body.resort6,
        tourimg1:req.body.tourimg1,
        tour1:req.body.tour1,
        tourimg2:req.body.tourimg2,
        tour2:req.body.tour2,
        tourimg3:req.body.tourimg3,
        tour3:req.body.tour3,
        tourimg4:req.body.tourimg4,
        tour4:req.body.tour4,
        tourimg5:req.body.tourimg5,
        tour5:req.body.tour5,
        tourimg6:req.body.tourimg6,
        tour6:req.body.tour6,
        
    })
    projectData.save((err,result)=>{
        if(err){
            res.send("Error")
        }
        else{
            res.send("places sent Successfully")
        }
    })
}

async function projectDataFetching(req,res){
    projectModelCtrl.projectModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}

module.exports={ projectRegistrationController , projectDataFetching }