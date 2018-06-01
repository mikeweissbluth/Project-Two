let db = require("../models");

module.exports = function (app) {
    app.get("/api/facility", function (request, response) {
        db.Facility.findAll({}).then(function (dbFacility) {
            res.json(dbFacility);
        });

    });
};