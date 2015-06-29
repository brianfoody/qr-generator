var qr = require('qr-image');  
var express = require('express');

var app = express();

app.get('/', function(req, res) {  
  var code = qr.image("http://www.synergy.net.au/myaccount", { type: 'svg' });
  res.type('svg');
  code.pipe(res);
});

app.listen(3000);  