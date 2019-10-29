// ++++++++++++++++ BURGER.JS ++++++++++++++++++++++++++++++++++++++++++//
//  
//  This app has only one model--burger.js--which contains the actions
//  to perform when called for the controller and orm to consume.
//  For the burger app, this is loading the db data (selectAll),
//  adding a burger (addOne), or updating the burger to 'devoured' (updateOne).
//
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


// Calling the orm to come and get it
var orm = require("../config/orm.js");

// Calling the burgers table items to be loaded
var burger = {
//selectAll function
  selectAll: function(cols, vals, cb) {
    orm.selectAll("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

//insertOne adds a new burger when submitted by the user
  insertOne: function(objColVals, condition, cb) {
    orm.insertOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

//updateOne updates the burger object in the array
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

// Export to the controller 
module.exports = burger;
