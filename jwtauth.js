const express= require('express');
const jwt= require('jsonwebtoken');
const bodyParser= require('body-parser');

const app = express();
const cors=require('cors')
app.use(cors())
app.use(bodyParser.json())

const mongoose= require('mongoose')
const url='mongodb://localhost:27017/darwinbox'

mongoose.connect(url)
mongoose.Promise= global.Promise 
const db= mongoose.connection;
db.on('error', console.error.bind(console, 'DB error'))

const userSchema = mongoose.Schema(
    {
        Username:{
            type: String
        },
       Password:{
            type: String
        }
        
    }
)


let userModel= mongoose.model("usersjwt", userSchema)

app.post('/register', (req,res)=>{
    console.log(req.body)
   let userData = userModel(req.body)

   userData.save((err, result)=>{
       if(err){
           res.send(err)
       }
       else{

           res.send("User added successfully")
       }
   })

})



const PORT= 3005;
const jwtSecretKey="secret"

app.post("/login/generateToken", (req, res) => {

    userModel.find({'Username':req.body.Username, 'Password':req.body.Password},(err,docs)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(docs[0]._id)
            if(docs.length==1)
            {
               let data={
                time:Date(),
                userId: docs[0]._id
               }

               const token= jwt.sign(data, jwtSecretKey)
               res.send(token);
            }
            else{

                res.send("Wrong Credentials")
            }
        }
    })  
})


app.post("/validate", (req, res) => {

   
    try {
        const token = req.header('authorization');
  
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
            console.log("verified")
            res.send("User Verified Successfully");
        }else{
           
            return res.status(401).send(error);
        }
    } catch (error) {
        
        return res.status(401).send(error);
    } 
})


app.listen(PORT, ()=>{
    console.log("Server started")
})

