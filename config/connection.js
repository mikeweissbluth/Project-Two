// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  port: 5432,
  host: "ec2-107-21-255-2.compute-1.amazonaws.com",
  user: "hqzhtxqhwspnks",
  password: "ebaaf4a553a13efe03ccd0c77451ffa22fdb831fd78562205f6344a4e858d3c8",
  database: "environment_db",
  multipleStatements: true
});


// Connect to the database
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });



// Export connection
module.exports = connection;
