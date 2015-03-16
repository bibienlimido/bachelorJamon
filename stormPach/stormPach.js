var express = require('express');
var stormpath = require('express-stormpath');

var app = express();
app.use(stormpath.init(app, {
    
    application: 'https://api.stormpath.com/v1/applications/3IAxsi6RMbGtFAKMhQhro2',
    secretKey: 'some_long_random_string',
}));

app.listen(3000);