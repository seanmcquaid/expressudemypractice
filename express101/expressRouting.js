const express = require("express");
const app = express();

// app object has a few methods
// http verbs! REST verbs
// get - the default for all browserrs
// post - used if you want to submit something to a resource
// delete - deletes the resource
// put =- replaces all current representations of the target
// all - I will accept any method

// 2 args: path and callback if an http request that matches this is made to the path in #1

// app.all("/", (req,res)=>{
//     res.send("<h1> Welcome to the Home Page");
// })

app.get("/", (req,res)=>{
    // console.log(req);
    res.send("<h1> Welcome to the Home Get Page");
});

app.post("/", (req,res)=>{
    res.send("<h1> Welcome to the Home Post Page");
});

app.delete("/", (req,res)=>{

})

app.put("/", (req,res)=>{

})

app.listen(3000);
console.log("server is listening on port 3000")