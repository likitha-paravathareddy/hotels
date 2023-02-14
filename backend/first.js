/*const express = require('express')
const app = express();
const fs=require("fs");
app.use(express.json());
users=[
  {
    name:"likitha",
    email:"likitha@gmail.com"
  },
  {
    name:"murali",
    email:"murali@gmail.com"
  }
];

//req.body
app.get('/:id::name', function (req, res) {
  res.send(JSON.stringify(users));
  req.params.id
  req.params.name
})

app.get('/api', function (req, res) {
    res.send('Hello World api')
  })
  app.post('/places', function (req, res) {
    //res.send('Hello World api')
    placeName=req.body.name
    src=req.body.src
    place={
      src:src,
      name:placeName
    }
    placeString=JSON.stringify(place)
  })
  
  
app.listen(3000)*/

const express = require('express')
const app = express();
const fs=require("fs");
app.use(express.json());


  app.post('/users', function (req, res) {
    //Get body data from request
      let data=req.body;
      //Write to file
      fs.writeFileSync('./hello.json',JSON.stringify(data));
      //Send response
      res.send("OK");

  })
  app.get('/api', function (req, res) {
  
    let data=JSON.parse(fs.readFileSync("./hello.json"));
    res.json(data);
      
    })
  
  
app.listen(3000)