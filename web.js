var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs')

app.get('/', function(request, response) {
  var text = '';
  fs.readFile('index.html','r,', function (err, data) {
      if (err) throw err;
      text = data.toString();
   });   
 response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
