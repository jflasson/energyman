var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(request, response){
  response.send('OK');
});

app.listen(3000, function(){
  console.log('Listening on port 3000'); 
});
