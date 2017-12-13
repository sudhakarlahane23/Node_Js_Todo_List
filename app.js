const express = require("express");
const todoController = require("./controllers/todocontroller");

const app = express();

// Setup template engine
app.set("view engine","ejs");

// setup static files
app.use("/css",express.static("./style"));
app.use("/js",express.static("./js"));

// fire controller function here
todoController(app);

// Listen port
app.listen(3000, function(){
    console.log("You are listing to port 3000");
});