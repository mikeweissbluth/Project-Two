// Dependencies
// =============================================================
var connection = require("../config/connection.js");

module.exports = function (app) {
    app.get("/api/all", function (request, response) {
        var dbQuery = "SELECT f.FACILITY_NAME, f.FACILITY_ID, f.LATITUDE, f.LONGITUDE, c.CHEM_NAME FROM environment_db.facility_info f LEFT JOIN environment_db.chemical_info c ON f.FACILITY_ID = c.FACILITY_ID";
    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      console.log(result);
      response.json(result);
    });

    });
};

