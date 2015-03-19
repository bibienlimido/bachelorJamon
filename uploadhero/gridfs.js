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
fs.createReadStream('/some/path').pipe(writestream);

// streaming from gridfs
var readstream = gfs.createReadStream({
  filename: 'my_file.txt'
});

//error handling, e.g. file does not exist
readstream.on('error', function (err) {
  console.log('An error occurred!', err);
  throw err;
});

readstream.pipe(response);