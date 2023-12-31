const express = require("express");
const path = require("path");
const PROJECT = require("./package.json");
var ip = require("ip");
                   
var app = express();
var port = process.env.PORT || 8080;
var address = ip.address();
var server;         

// Creating server
server = app.listen(port, () => {
    // Clear console
    console.clear();
    
    // Applicaiton starting logs
    log(PROJECT.name + " v" + PROJECT.version + " By " + PROJECT.author);
    log(PROJECT.description + "\n");
    // log("Application is running in: " + process.env.NODE_ENV + "mode \n");
    log("Server has started.");
    log("Listening at: " + address + ":" + port);
    
});

// Default endpoint
app.use('/', express.static(path.join(__dirname, './public')));

function log(msg, type) {
    // Get time
    var date = new Date();
    var hours = date.getHours(); 
    var minutes = date.getMinutes(); 
    var seconds = date.getSeconds(); 
    var time =  hours + ":" + minutes + ":" + seconds; 

    // Check if type is included
    if (type != undefined) {
        // Console log message
        console.log("[" + type + "] (" + time + ") " + msg);
    } else {
        // Console log message
        console.log("[INFO] (" + time + ") " + msg);
    }
}