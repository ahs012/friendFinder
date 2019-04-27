// Require Path for parsing
var path = require('path');

module.exports = function(app){
    // Homepage route
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
    // Survey Route
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });
}