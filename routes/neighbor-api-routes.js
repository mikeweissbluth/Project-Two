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
    db.Neighbor.sum('yes', {
      where: {
        locationId: req.params.locationId
      }
    })
      .then(function(dbNeighbor) {
        console.log("sum by site " + dbNeighbor);
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
