const express = require('express')
const app = express();
const fs=require("fs");
const cors=require("cors")
app.use(express.json());
app.use(cors())
app.post('/login', function (req, res) {
      let data=req.body;
      console.log(data);
      mail=data.mail;
      passwd=data.passwd;

  
      
      for(i=0;i<data2.length;i++){
        if(data2[i].mail==mail)
        {
            console.log(data2[i].mail,mail);
            if(data2[i].password==passwd)
            {
                console.log(data2[i].password,passwd);
                res.send("1");
                return;
            }
        }
      }
      res.send("0");
      return;
  });
app.listen(3021)  









