const express = require('express')
const app = express();
const fs=require("fs");
const cors=require("cors")
app.use(express.json());
app.use(cors())

app.post('/flights', function (req, res) {
      let data=req.body;

    fs.writeFileSync("./flights.json",JSON.stringify(data));
 
      res.send("OK");
  })
app.listen(5404)  









