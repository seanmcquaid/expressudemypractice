// http is native to nodejs, we just have to ask for it
const http = require("http");

const fs = require("fs");
// fs module = file system module
// fs is built into node
// fs gives access to THIS computers file system


// the http module has a create server method that comes with it 
// it takes 1 arg:
// 1. the callback - which has 2 args, req, res

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        // the user wants the home page!
        // we know this because the req object has / in the url property

        // res = our way of responding to the requester
        // http message
        // 1. start line - check
        // 2. header
        // 3. body

        // writeHead takes two args:
        // 1. status code 
        // 2. object for the mime type

        res.writeHead(200,{"content-type":"text/html"});
        // res.write("");
        const homePageHTML = fs.readFileSync("node.html");
        res.write(homePageHTML);
        // console.log(homePageHTML);
        res.end();
    } else if (req.url === "/node.png"){
        res.writeHead(200,{"content-type":"image/png"});
        // res.write("");
        const image = fs.readFileSync("node.png");
        res.write(image);
        // console.log(homePageHTML);
        res.end();
    } else if (req.url === "/styles.css"){
        res.writeHead(200,{"content-type":"text/css"});
        // res.write("");
        const css = fs.readFileSync("styles.css");
        res.write(css);
        // console.log(homePageHTML);
        res.end();
    } else {
        res.writeHead(404,{"content-type":"text/html"});
        res.write("<h4>Sorry, this isn't the page you're looking for</h4>");
        res.end();
    }
});

// createServer returns an object with a listen method 
// listen takes 1 arg:
// 1. a port to listen for http traffic on

server.listen(3000);