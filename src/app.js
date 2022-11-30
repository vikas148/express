//creating a simple express app

const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("hello from home side in express");
});

app.get("/about",(req,res)=>{
    res.send("hello from about side in express");
});

app.get("/contact",(req,res)=>{
    res.send("hello from contact side in express");
});

app.get("/projects",(req,res)=>{
    res.send("hello from about side in express");
});



app.listen(8000,()=>{
    console.log("server listening on port 8000");
})