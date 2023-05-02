// Require the Express nom Package
const express = require("express");


// Express App
// Creating our server named app
const app = express();

// Make everything inside public avaible

app.use(express.static("public"));

// Route

// HTTP Verbs:

// GET - Get Information;
// POST - Post new information;
// DELETE - Delete information;
// PUT - Update Informations.

// Creating a "GET" Route
app.get("/home", (request, response, next)=>{
   response.sendFile(__dirname + "/views/home.html")
})

app.get("/pagetwo", (request, response)=>{
    response.sendFile(__dirname + "/views/pagetwo.html");
})

app.get("/pagethree", (request, response)=>{
    response.sendFile(__dirname + "/views/pagethree.html");
})

// Start the Server - .listen()
app.listen(3000, ()=> console.log("App is listening on PORT 3000"))