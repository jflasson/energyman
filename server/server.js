var express = require('express');
var server = express();
var dust = require('dustjs-linkedin');
var consolidate = require('consolidate');
var path = require('path');


server.engine('dust', consolidate.dust);
server.set('view engine', 'dust');
server.set('views', __dirname + '/templates')


server.use(express.static(path.join(process.env.PWD, 'public')));


server.get('/index', function(request, response){
  response.render('index');
});

server.get('/about', function(request, response){
	response.render('about');
});

server.get('/services', function(request, response){
	response.render('services');
});

server.get('/inmedia', function(request, response){
	response.render('inmedia');
});



server.listen(3000, function(){
  console.log('Listening on port 3000'); 
});
