const express = require('express')
const app = express();
const fs=require("fs");
const cors=require("cors")
app.use(express.json());
app.use(cors())
app.get('/queries',function(req,res){
    fs.readFile('./queries.json',function(err,data){
        //console.log(JSON.parse(data.toString()))
        if(err){
            console.log(err);
        }
        res.send(data.toString())
        
    })

})
app.post('/queries', function (req, res) {
      let data=req.body;
      console.log(JSON.stringify(data))
      data2=JSON.parse(fs.readFileSync("./queries.json"))
      data2.push(data)
      console.log(data2)
    fs.writeFileSync("./queries.json",JSON.stringify(data2));
 
      res.send("OK");
  })
app.listen(3006)  









