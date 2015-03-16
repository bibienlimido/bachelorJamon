var express = require('express');
var stormpath = require('express-stormpath');

var app = express();
app.use(stormpath.init(app, {
    apiKeyFile: '~/.stormpath/apiKey-3R08K8X4XFJT0B9R1PFDXVNXX.properties',
    application: 'https://api.stormpath.com/v1/applications/3IAxsi6RMbGtFAKMhQhro2',
    secretKey: 'some_long_random_string',
}));

app.listen(3000);