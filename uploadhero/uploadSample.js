/*Define dependencies.*/
var express = require('express'),
    multer  = require('multer')

var app = express()

app.get('/index.html', function(req, res){
  res.send('hello World');
});

app.post('/index.html',[ multer({ dest: './uploads/'}), function(req, res){
    console.log(req.body) // form fields
    console.log(req.files) // form files
    res.status(204).end()
}]);

app.listen(3000);