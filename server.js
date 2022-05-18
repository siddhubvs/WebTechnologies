var express = require("express");
var mongoclient = require("mongodb").MongoClient;

var app = express()
app.use(express.json())



mongoclient.connect("mongodb://localhost:27017",(err,client)=>{
    if(err){console.log("Error while Connecting")}
    else
    {
        db=client.db("empdb");
    }
});

const jwt = require("jsonwebtoken");
app.use(express.urlencoded({extended:true}));
const next = require("next");


app.post('/login',(req,res)=>{
    user = req.body.username;
    pass = req.body.password;

    db.collection("users").find({UserName:user,Password:pass}).toArray((err,item)=>{
        if(item){
            const Token = jwt.sign({
                "UserName":user
            },"cvrcollege")
        
            res.json({
                success:true,
                message:"Authentication Successful",
                token:Token
            })
            res.end();
        }
        
    })
})

function verifyToken(req,res,next){
    var token = req.headers['authorization'];
    
    console.log(token)
    if(token){

        token = token.split(' ')[1];        
        jwt.verify(token,"cvrcollege",(err,decode)=>{
            if(err){
                return res.json({
                    success : false,
                    message : "error"
                })
            }
            else{
                next();
            }
        })
    }
    else{
        return res.json({
            success : false,
            message : "error occurred"
        })
    }

}

app.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/loginpage.html")
})


app.get("/index",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})


app.get("/emps",(req,res)=>{
db.collection("emp").find().toArray((err,items)=>{
    console.log("displayed successfully")
    res.send(JSON.stringify(items));
    res.end();
})
})

app.post("/insertemp",(req,res)=>{
    var emp1={
        "_id":req.body.id,
        "name":req.body.name,
        "email":req.body.email,
        "phone":req.body.phone
    }

    db.collection("emp").insertOne(emp1)
    res.json(emp1);
    res.end();
   
})


app.get("/emps/:id",(req,res)=>{
    var id = parseInt(req.params.id);
    db.collection("emp").find({"_id":id}).toArray((err,item)=>{
        res.send(item);
        res.end();

    })    
})

app.put("/updateemp/:id",(req,res)=>{
    console.log(req.params.id)
    db.collection("emp").updateOne({"_id":req.params.id},{$set:{"name":req.body.name}});
    console.log("updated successfully")
    res.end();
})

app.delete("/deleteemp/:id",(req,res)=>{
    db.collection("emp").deleteOne({"_id":req.params.id});
    console.log('deleted successfully')
    res.end();
})

app.listen(2000,()=>console.log("server started"))