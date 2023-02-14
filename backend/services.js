const express = require('express')
const app = express();
const fs=require("fs");
const cors=require("cors")
app.use(express.json());
app.use(cors())
app.get('/services',function(req,res){
    fs.readFile('./services.json',function(err,data){
        //console.log(JSON.parse(data.toString()))
        if(err){
            console.log(err);
        }
        res.send(data.toString())
        
    })

})
app.post('/services', function (req, res) {
      let data=req.body
      data2=JSON.parse(fs.readFileSync("./services.json"))
      for(i=0;i<data2.length;i++)
      {

        if(data2[i].mail==data.mail)
        {
            if(data2[i].service_name==data.service_name)
            {
            res.send("1")
            return;
            }
        }
      }
      data2.push(data)
      //console.log(data2)
    fs.writeFileSync("./services.json",JSON.stringify(data2));
 
      res.send("OK");
  })
app.listen(4000)  









