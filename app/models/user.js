var mongoose 	=  require('mongoose');
var bcrypt 		=  require('bcrypt-nodejs');

//schema user
var userSchema = mongoose.Schema({
	local:{
		email: String;
		pass: String;
	}
});