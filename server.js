var express = require('express');
var app = express();
var path = require('path');

var FilmApi = require('./api/film_api.js');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index_html.html'));
});

app.use(express.static('client/build'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  new FilmApi(app);

  console.log('app listening at http://%s:%s', host, port);
});
