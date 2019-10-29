// ++++++++++++++++ ORM.JS ++++++++++++++++++++++++++++++++++++++++++++//
//  
//  Connect orm to MySQL connection
//  and Heroku (JAWSDB)
//  Support for CRUD on the database-side.
//  For the burger app, this is loading all data upon index access,
//  adding a burger (addOne), or updating the burger's status (updateOne)
//
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


//  Connect MySQL with connection.js
var connection = require("../config/connection.js");

// Helper function for SQL syntax
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}


//selectAll retrieves all data from the burgers table upon page load
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

// InsertOne adds an object to the burgers table in array format--when users 'build a burger'
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

// updateOne updates an object in the burgers table; for this app, updates status to 'devoured' (0)
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};


// Exports the orm object for burger.js (the model); burger.js directs the action for the orm to take.
module.exports = orm;
