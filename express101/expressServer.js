// setInterval(()=>{
//     console.log("1 second"),1000;
// });

// NODE JS IS THE LANGUAGE
// express is node, a node module


const path = require("path");

// http is a native module
// const http = require("http");
// express is a 3rd party module
const express = require("express");
// an app is the express function (createApplication inside the express module)
// invoked and is an express application
const app = express();

// serve up static files only one line!
app.use(express.static("public"));

// all is a method and it takes 2 args:
// 1) the route 
// 2) callback to run if the route is requested

app.all("/", (req,res)=>{
    // express handles the basic headers, this is awesome!
    // res.send("<h1>This is the home page</h1>");
    // read in node.html
    res.sendFile(path.join(__dirname + "/node.html"));
    // express handles the end - another win!

})

app.listen(3000);
console.log("server is listening on port 3000")