//Requirements
var express		= require('express');
var mongoose	= require('mongoose');
var passport	= require('passport');
var flash		= require('connect-flash');
var session		= require('express-session');
var cookieParser= require('cookie-parser');
var bodyParser	= require('body-parser');
var path		= require('path');
var app			= express();
//
//set Database
mongoose.connect('mongodb://127.0.0.1/users');
//set up requirements
app.use(cookieParser());
app.use(bodyParser());
app.use(flash());
app.use(session({secret: 'secretKey'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');


//route
app.get('/',function(req, res){
	res.sendFile(path.join(__dirname+'/views/index.html'));
});

///run app
app.listen(3000);
console.log('running on'+3000);
