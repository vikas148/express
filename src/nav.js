//serving multiple files
const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.write("hello from home side in express");
    res.write("hello from home side in express");
    res.write("hello from home side in express");
    res.send();
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