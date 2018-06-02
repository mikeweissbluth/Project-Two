// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Neighbor model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
 
  // Get route for retrieving a single post
  app.get("/api/neighbor/:locationId", function(req, res) {
    db.Post.findOne({
      where: {
        locationId: req.params.id
      }
    })
      .then(function(dbNeighbor) {
        res.json(dbNeighbor);
      });
  });

  // POST route for saving a new post
  app.post("/api/neighbor", function(req, res) {
    console.log(req.body);
    db.Neighbor.create({
      locationId: req.body.locationId,
      yes: req.body.yes,
    //   no: req.body.no
    })
      .then(function(dbNeighbor) {
        res.json(dbNeighbor);
      });
  });

  

  
};
