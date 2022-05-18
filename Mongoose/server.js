var express = require("express")
var mongoose = require("mongoose")
const { stringify } = require("nodemon/lib/utils")

var app = express()

app.use(express.json())
mongoose.connect("mongodb://localhost:27017/userdb")

db = mongoose.connection

db.on("error",()=>{console.log("ERROR OCCURED")})

db.once("open",()=>{console.log("Connection Established")})



var userSchema = new mongoose.Schema({
    "name":String,
    "salary":Number,
    "age":Number
})
stringify(userSchema)

userModel = mongoose.model("users",userSchema)
user1 = new userModel({"name":"rakesh","salary":26000,"age":20})

app.post("/addemp",(req,res)=>{
   userModel.collection.insertOne(user1)
   res.json(user1)
   res.end()
})
app.get("/users",(req,res)=>{
    
    db.collection("users").find().toArray((err,item)=>{
        res.send(item)
        res.end()
    })
})

app.listen(9000,()=>{console.log("server started")})
