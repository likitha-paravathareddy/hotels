// const express = require('express')
// const app = express();
// app.use(express.json());
// app.get('/hello', function (req, res) {
//     res.send('Hello World')
//     fun1();
// fun2();
// fun3();
// fun4();
//   })
// const cors=require("cors")
// app.use(cors())
// const fs=require("fs")
// app.get('/data/:name',function(req,res){
//     fs.readFile('data.json','utf-8',function(err,data){
//         name=req.params.name
//         if(err){
//             console.log(err);
//         }

//         const obj=JSON.parse(data)
//         const user_data=obj.data
//         for(i=0;i<user_data.length;i++)
//         {
//             if(user_data[i].name==name){
//             res.send(user_data[i])
//             return;
//             }
//         }
//         res.send("user not found")
//     })

// });
// app.get('/data',function(req,res){
//     fs.readFile('./data.json',function(err,data){
//         if(err){
//             console.log(err);
//         }
//         res.send(data.toString())
// });
// });
// app.post('/data',function(req,res){
//     //data2=JSON.parse(fs.readFile('data.json'))
//     //console.log(data2)
//     data2=JSON.parse(fs.readFileSync("./data.json"))
//     data=req.body
//     data2.data.push(data)
//     fs.writeFileSync("./data.json",JSON.stringify(data2))
//     res.send("ok")
// });
// function fun1(){
//     console.log("1");
// }
// function fun2(){
//     console.log("2");
// }
// function fun3(){
//     console.log("3");
// }
// function fun4(){
//     console.log("4");
// }

// app.listen(3001)

// const timeout=setTimeout(printer,5000)

// function printer()
// {
//     console.log("Hello World");
// }

// myInterval=setInterval(displayHello,3000);
// function displayHello(){
//     console.log("hello");
//     stopInterval();
// }
// function stopInterval(){
//     clearInterval(myInterval);
// }
const time1=setTimeout(()=>console.log("will execute after 5s"),5000)
const time2=setTimeout(()=>console.log("will execute after 10s"),10000)
const time3=setTimeout(()=>console.log("will execute after 1s"),1000)
console.log("first")