const userModelCtrl = require('../models/usermodel')

async function userRegistrationController(req, res) {
    console.log(req.body)
    let userData = userModelCtrl.userModel({
        name: req.body.name,
        password: req.body.password,
        mail: req.body.mail,
        mobileNumber: req.body.mobileNumber,
        address: req.body.address,
        image: req.body.image
    })
    userModelCtrl.userModel.find({ mail: req.body.mail }).then((resp) => {
        if (resp.length != 0) {
            res.send("1")
        }
        else {
            userData.save((err, result) => {
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
async function userDataFetching(req, res) {
    userModelCtrl.userModel.find({}, (err, docs) => {
        if (err) {
            res.send("Something went wrong!");
        }
        else {
            res.send(docs)
        }
    })


}

async function userLogin(req, res) { 
    const email = req.body.mail
    const password = req.body.passwd
    console.log(req.body)
    userModelCtrl.userModel.find({ email: email, password: password }).then((resp) => { 
        if (resp.length != 0) { 
            console.log(resp)
            res.send("1") 
        } else { res.send("0") } }) }


module.exports = { userRegistrationController, userDataFetching, userLogin}