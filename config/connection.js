// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
<<<<<<< HEAD
  user: "Karen",
  password: "test827",
=======
  user: "root",
  password: "",
>>>>>>> ac0a57c4f287e3dcfa42069dbd9d86cafbfe08f7
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
