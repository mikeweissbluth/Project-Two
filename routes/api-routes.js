// Dependencies
// =============================================================
var connection = require("../config/connection.js");
var _ = require('lodash');

module.exports = function (app) {
    app.get("/api/all", function (request, response) {
        var dbQuery = "SELECT f.FACILITY_NAME, f.FACILITY_ID, f.LATITUDE, f.LONGITUDE, f.FACILITY_COMPLIANCE_REPORT_URL, c.CHEM_NAME_FOR_URL, c.CARCINOGEN, c.CLEAN_AIR, c.HSDB_URL FROM environment_db.facility_info f LEFT JOIN environment_db.chemical_info c ON f.FACILITY_ID = c.FACILITY_ID";
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
                    output[existingIndex].CHEM_NAME_FOR_URL = output[existingIndex].CHEM_NAME_FOR_URL.concat(value.CHEM_NAME_FOR_URL);
                    output[existingIndex].HSDB_URL = output[existingIndex].HSDB_URL.concat(value.HSDB_URL);
                    if(value.CARCINOGEN === 'Y'){
                        output[existingIndex].CARCINOGEN = 'Y';}
                    if(value.CLEAN_AIR === 'Y'){
                        output[existingIndex].CLEAN_AIR = 'Y';}
                } else {
                    if (typeof value.CHEM_NAME_FOR_URL == 'string' || typeof value.HSDB_URL == "string")
                    value.CHEM_NAME_FOR_URL = [value.CHEM_NAME_FOR_URL];
                    value.HSDB_URL=[value.HSDB_URL];
                    output.push(value);
                }

                
            });
            
            // console.dir(output);
            response.json(output);
           
            
        });
            // response.json(output);
        
    });


};

