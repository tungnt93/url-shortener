var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
	var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
	var lang = req.headers["accept-language"].split(',')[0];
	var software = req.headers['user-agent'].split(') ')[0].split(' (')[1];
	res.send({
		ipaddress: ip,
		language: lang,
		software: software
	});
});


app.listen(app.get('port'), function(){
  console.log('App listening on', app.get('port'));
});