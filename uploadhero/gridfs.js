var mongo = require('mongodb');
var Grid = require('gridfs-stream');
var fs = require('fs');
// create or use an existing mongodb-native db instance
var db = new mongo.Db('yourDatabaseName', new mongo.Server("127.0.0.1", 27017));
var gfs = Grid(db, mongo);

// streaming to gridfs
var writestream = gfs.createWriteStream({
    filename: 'my_file.txt'
});
fs.createReadStream('bass_fast_dry.wav').pipe(writestream);

// streaming from gridfs
var readstream = gfs.createReadStream({
  filename: 'my_file.txt'
});

