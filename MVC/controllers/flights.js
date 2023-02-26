const flightModelCtrl=require('../models/flightmodel')

async function flightRegistrationController(req,res){
    console.log(req.body)
    let flightData=flightModelCtrl.flightModel({
        type:req.body.type,
        from:req.body.from,
        to:req.body.to,
        flightdate:req.body.flightdate,
        costOfPlane: req.body.costOfPlane
    })
    flightModelCtrl.flightModel.find({ from: req.body.from,to:req.body.to, flightdate: req.body.flightdate}).then((resp) => {
        
    })
}




module.exports={ flightRegistrationController }