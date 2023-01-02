const express = require("express")
const fs = require("fs")
 
 const app = express()
//const fs = require("fs")
var port = 3000
app.listen(port , connection)
function connection()
{

    console.log("some one connected to server right now instantly")
}

//fs.writeFile(data.txt , "function is runned successfully..." , function1)

function function1()
{   
  console.log("data added");
}

function printing2(req,resp)
{
 // resp.sendFile(__dirname + "/homing2.html")
 var ipdata = req.ip
  // const ipdata = console.log("welcome to my server "+req.ip)
  resp.send(req.ip)
    let myx = req.query.x;
    fs.writeFile("backup.txt" ,myx+"\n",{flag:'a+'}, aletring)
  console.log(myx)
  const  srvrx = console.log( myx)  //created the server reference variable to  get the data

  //won't use  resp.send two times in one function at time--the second one will unable to run also give the error
 // resp.send("welcome to this page Mr. " + myx)
  

}



function aletring()
{
   console.log("data is added ")
}
//fs.writeFile("backup.txt" ,ipdata, aletring)



app.get("/data",(req,resp) => {resp.sendFile(__dirname+"/backup.txt")})
app.get("/home1" , printing)
app.get("/home2" , printing2)
function printing(req , res )
{

    let myx = req.query.x;
    fs.writeFile("backup.txt" ,myx+"\n",{flag:'a+'}, aletring)

res.sendFile(__dirname + "/homing.html")
//res.send("hello world ....");
console.log("done successfully ")
}

