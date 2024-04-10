// Web framework for Node.js
const express = require("express");
// Middleware for parsing request bodies
// Utilisation de body-parser pour traiter 
// les données dans le corps des requêtes
const bodyParser = require("body-parser");
const cors = require("cors");
// Dans le contexte de Node.js, 
// CORS est utilisé lorsque vous 
// créez des applications Web ou des APIs à l'aide de 
// frameworks comme Express.js. 
const morgan = require("morgan");

// Morgan est spécifiquement conçu pour 
// la gestion des logs(journaux) dans les applications web.
const app = express();


app.use(morgan("combined"));

app.use(bodyParser.json());

app.use(cors())


// routes in nodejs app :
// GET
// POST
// PUT 
// DELETE 
// PATCH 
// the first one would be get :
app.get("/status", (req, res) => {
    
    res.send({
        message: "hello world"
    });
})
app.listen(process.env.PORT || 8081);



