/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongo = require('mongodb'),
  Db = mongo.Db,
  Grid = mongo.Grid;

Db.connect("mongodb://192.1681.140:27017/exampleDb", function(err, db) {
  if(err) return console.dir(err);

  var grid = new Grid(db, 'fs');    
  var buffer = new Buffer("Hello world");
  grid.put(buffer, {metadata:{category:'text'}, content_type: 'text'}, function(err, fileInfo) {
    if(!err) {
      console.log("Finished writing file to Mongo");
    }
  });
});
