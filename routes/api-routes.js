// Dependencies
// =============================================================
var connection = require("../config/connection.js");
var _ = require('lodash');

module.exports = function (app) {
    app.get("/api/all", function (request, response) {
        var dbQuery = "SELECT f.FACILITY_NAME, f.FACILITY_ID, f.LATITUDE, f.LONGITUDE, c.CHEM_NAME FROM environment_db.facility_info f LEFT JOIN environment_db.chemical_info c ON f.FACILITY_ID = c.FACILITY_ID";
        connection.query(dbQuery, function (err, result) {
            if (err) throw err;
            //console.log(result);
            //response.json(result);

            var output = [];

            result.forEach(function (value) {
                var existing = output.filter(function (v, i) {
                    return v.FACILITY_ID == value.FACILITY_ID;
                });
                if (existing.length) {
                    var existingIndex = output.indexOf(existing[0]);
                    output[existingIndex].CHEM_NAME = output[existingIndex].CHEM_NAME.concat(value.CHEM_NAME);
                } else {
                    if (typeof value.CHEM_NAME == 'string')
                    value.CHEM_NAME = [value.CHEM_NAME];
                    output.push(value);
                }
                
            });
            
            // console.dir(output);
            response.json(output);
           
            
        });
            // response.json(output);
        
    });


};

