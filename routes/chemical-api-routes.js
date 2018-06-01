let db = require("../models");

module.exports = function (app) {
    app.get("/api/chemical/:id", function (request, response) {
        db.Chemical.findOne({
            where: {
                id: request.params.id
            }
        }).then(function (dbChemical) {
            res.json(dbChemical);
        });
    });
};