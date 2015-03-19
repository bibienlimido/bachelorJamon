/*Define dependencies.*/

var express = require("express");
var multer = require("multer");
var app = express();
var done = false;
var mongo = require('mongodb');
var Grid = require('gridfs-stream');
var db = new mongo.Db('music', new mongo.Server("192.168.1.140", 27017));
var gfs = Grid(db, mongo);

/*Configure the multer.*/

app.use(multer({dest: './uploads/',
    rename: function(fieldname, filename) {
        return filename + Date.now();
    },
    onFileUploadStart: function(file) {
        console.log(file.originalname + ' is starting ...')
    },
    onFileUploadComplete: function(file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path)
        done = true;
    }
}));

/*Handling routes.*/

app.get('/', function(req, res) {
    res.sendFile("index.html", {root: __dirname});
    console.log(app.timeStamp);
});

app.post('/api/photo', function(req, res) {
    if (done === true) {
        console.log(req.files);
        console.log(app.timeStamp);
        res.end("File uploaded.");


        req.files(gfs.createWriteStream({
            filename: 'test'
        }));
        res.send("Success!");
    }
});

/*Run the server.*/
app.listen(3000, function() {
    console.log("Working on port 3000");
});