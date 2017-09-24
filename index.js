var express = require('express');
// var $ = require('jquery');

var secret_key = "rnHerCG6ktg0GaPsexpXKQVycF6A0Vxh";

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.post('/statistics', function(req, res) {
    req.on("data",function(chunk){
    	console.log(chunk);
    	
		request.get({url:'https://api.coin-hive.com/stats/site', formData: {secret:secret_key}}, 
			function optionalCallback(err, httpResponse, body) {
			if (err) {
			    return console.error('upload failed: ', err);
			}
			console.log('ayy: ', body);
			res.send(body);
		});
    });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});