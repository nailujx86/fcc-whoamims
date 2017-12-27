// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

app.enable('trust proxy');
app.use(require('express-useragent').express());

app.get("/",function(req,res){
  var retObj = {};
  var findOS = /\(([^\(\)]+)\)/g;
  retObj.ipaddress = req.ip;
  retObj.language = req.acceptsLanguages()[0];
  retObj.software = req.useragent.os;
  res.send(retObj);
});  

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
