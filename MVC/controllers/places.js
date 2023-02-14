const placeModelCtrl=require('../models/placemodel')

async function placeRegistrationController(req,res){
    console.log(req.body)
    let placeData=placeModelCtrl.placeModel({
        src:req.body.src,
        name:req.body.name,
        data:req.body.data,
    });
    placeModelCtrl.placeModel.find({ src:req.body.src,name:req.body.name }).then((resp) => {
        if (resp.length != 0) {
            res.send("1")
        }
        else {
            placeData.save((err, result) => {
                if (err) {
                    res.send("something went wrong")
                }
                else {
                    res.send("place added succesfully")
                }
            })
        }
    })
}

async function placeDataFetching(req,res){
    placeModelCtrl.placeModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}

module.exports={ placeRegistrationController , placeDataFetching }