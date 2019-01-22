const express = require("express");
const app = express();

// app comes with a use method
// use takes 1 arg right now
// the middleware you want to run

app.use(express.static("public"));

app.use(express.static("node_modules"));

app.listen(3000);