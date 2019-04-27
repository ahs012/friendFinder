// Server Requires / Initial Set-Up
var express = require("express");
var app = express();
var path = require('path');

// Heroku Predetermined Port or 8080
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes Require
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("Friend Finder is up & running on: http://localhost:" + PORT + " !")
});