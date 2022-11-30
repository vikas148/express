const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs")
// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));
const staticPath=path.join(__dirname, "../public");

//to set view engine
const templatepath=path.join(__dirname,"../templates/views")
const partialspath=path.join(__dirname,"../templates/partials")
console.log(templatepath);
app.set("view engine","hbs");
app.set("views","templatepath");
hbs.registerPartials(partialspath)
//setting template routes
app.get("/",(req,res)=>{
    res.render('index')
})

//built in middleware
app.use(express.static(staticPath))


//it s have erroe
app.get("/", (req , res) => {
    res.render("index")
})

    // app.get("/about",(req,res)=>{
    //     res.send("hello from about side in express");
    // });
    

// app.get("/contact",(req,res)=>{
//     res.send("hello from contact side in express");
// });

// app.get("/projects",(req,res)=>{
//     res.send("hello from about side in express");
// });

app.get("*",(req,res)=>{
    res.render("404",{errorcomment: "Opps page not found"})
})

app.listen(8000,()=>{
    console.log("server listening on port 8000");
})