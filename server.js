/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Kate Galle
 * Email: gallek@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var twitData = require('./twitData');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res, next){
	
	//make sure all of the variables are corresponding correctly

	res.status(200).render('tweeter', {
		twitt: twitData,
		showModal: true,
		page: true
	});
});

app.get('/twits', function(req, res, next){
	
	//make sure all of the variables are corresponding correctly

	res.status(200).render('tweeter', {
		twitt: twitData,
		showModal: true,
		page: true
	});
});

app.get('/twits/:num', function(req,res,next){
	
	console.log("==params for req:", req.params);

	var num= req.params.num;

	//get the correct index

	var data = twitData[num];
	if(data){
		res.status(200).render('tweeter', data);
	}
	else{
		next();
	}
});

app.get('*', function (req, res, next) {
	res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
