const express = require("express")
const ConnectToDB = require('./src/db/db')
require("dotenv").config();


const app = express();   //created server


   ConnectToDB()                       // server database se connect server.js file mein karna hota hai 


app.use(express.json())

app.get('/',(req,res) => {
    
    res.send ("hello world")

})

app.post('/notes',(req,res) => {

   const {title,content}=req.body
   console.log(title,content)

})


app.listen(3000, () => {
    console.log("server is running on port 3000");  //running server 

})