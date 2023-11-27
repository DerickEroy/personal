const User = require("../models/User");
const bcrypt = require("bcrypt");
const auth = require("../auth");



// User Register
module.exports.register = (reqBody) => {
	let hashedPassword = bcrypt.hashSync(reqBody.password, 10);

	let newUser = new User({
		fullName: reqBody.fullName,
		email: reqBody.email,
		phone: reqBody.phone,
		password: hashedPassword,
	})	

	return newUser.save().then((user, err) => {
		if(err){
			return false
		} else {
			return true
		}
	}).catch(err => err)
}



//  User Login
module.exports.login = (reqBody) => {
	return User.findOne({email: reqBody.email}).then((result) => {
		if(result == null){
			return false
		} else {
			let passwordVerify = bcrypt.compareSync(reqBody.password, result.password);
			if(passwordVerify){
				return {
					access: auth.createAccessToken(result)
				}
			} else {
				return false
			}
		}
	}).catch(err => err)
};



// User Details
module.exports.details = (userId) => {
	return User.findById(userId)
	.then(result => {
		result.password = "";
		return result;
	})
	.catch(err => err)
};