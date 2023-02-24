const hotelModelCtrl=require('../models/hotelmodel')

async function hotelRegistrationController(req,res){
    console.log(req.body)
    let hotelData=hotelModelCtrl.hotelModel({
        hotel_name:req.body.hotel_name,
        no_of_people:req.body.no_of_people,
        dropsel:req.body.dropsel,
        from_date:req.body.from_date,
        to_date:req.body.to_date,
        email:req.body.email,
        status:"Pending"
    })
    // console.log(hotel_data)
    hotelModelCtrl.hotelModel.find({ email: req.body.email,hotel_name:req.body.hotel_name }).then((resp) => {
        if (resp.length != 0) {
            res.send("1")
        }
        else {
            hotelData.save((err, result) => {
                if (err) {
                    res.send("something went wrong")
                }
                else {
                    res.send("hotel request sent succesfully")
                }
            })
        }
    })
}

async function hotelDataFetching(req,res){
    hotelModelCtrl.hotelModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}


function hotelDataUpdating(req,res){
    console.log(req.body)
    hotelModelCtrl.hotelModel.updateOne({email:req.body.email},{$set:{"status":"Approved"}},(err,docs)=>{
        if(err){
            res.send("something went wrong")
        }
        else{
            res.send("Approved")
        }
    })
} 

async function hotelDataUpdatingreg(req,res){
    console.log(req.body)
    hotelModelCtrl.hotelModel.updateOne({email:req.body.email},{$set:{status:"Rejected"}},(err,docs)=>{
        if(err){
            res.send("something went wrong")
        }
        else{
            res.send("Rejected")
        }
    })
} 


module.exports={ hotelRegistrationController , hotelDataFetching,hotelDataUpdating,hotelDataUpdatingreg }