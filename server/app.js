var express = require('express');
var app=express();
var path = require('path');
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
var mongoose = require('mongoose');
// 27017 is default mongo port
mongoose.connect(process.env.PORT || 'localhost:27017/DBNAME');

// spin up server
app.listen( process.env.PORT || 8080, function( req, res ){
  console.log( 'listening on 8080' );
});

app.get('/', function (req, res) {
  res.sendFile(path.resolve('views/index.html'));
});//end of base URL

//static folder
app.use(express.static('public'));
