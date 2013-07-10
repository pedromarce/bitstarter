var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs')

app.get('/', function(request, response) {
  var text = '';
  fs.readFile('index.html','utf8', function (err, data) {
      response.send(data.toString());
   });   
})

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
