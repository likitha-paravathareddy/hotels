const serviceModelCtrl=require('../models/servicemodel')

async function serviceRegistrationController(req,res){
    console.log(req.body)
    let serviceData=serviceModelCtrl.serviceModel({
        name:req.body.name,
        service_name:req.body.service_name,
        email:req.body.email,
        Date_of_service:req.body.Date_of_service,
        Number_of_days:req.body.Number_of_days
    })
    serviceModelCtrl.serviceModel.find({ email: req.body.email,service_name:req.body.service_name }).then((resp) => {
        if (resp.length != 0) {
            res.send("1")
        }
        else {
            serviceData.save((err, result) => {
                if (err) {
                    res.send("something went wrong")
                }
                else {
                    res.send("registered succesfully")
                }
            })
        }
    })
}

async function serviceDataFetching(req,res){
    serviceModelCtrl.serviceModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}

module.exports={ serviceRegistrationController , serviceDataFetching }