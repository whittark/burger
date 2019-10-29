// ++++++++++++++++CONNECTION.JS +++++++++++++++//
//  Set up MySQL connection for local use
//  and Heroku (JAWSDB)
//++++++++++++++++++++++++++++++++++++++++++++++//

var mysql = require("mysql");
var connection;

// DB setup for Heroku

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);

  // Use local instead of Heroku if no Heroku
}else{
  connection = mysql.createConnection({
  	port: 3306,
    host: "localhost",
    user: "root",
    password: "Allegro11!",
    database: "burgers_db"
  })
}

// Establish connection
connection.connect();

// Export connection; ORM uses this connection to access db data
module.exports = connection;
