const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: [true, 'Fullname is required']
	},
	email: {
		type: String,
		required: [true, 'Email is required']
	},
	phone: {
		type: String,
		required: [true, 'Phone is required']
	},
	password: {
		type: String,
		required: [true, 'Password is required']
	},
	isAdmin :{
		type: Boolean,
		default: false
	}
})

module.exports = mongoose.model("User", userSchema);