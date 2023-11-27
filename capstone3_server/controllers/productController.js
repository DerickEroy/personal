const Product = require("../models/Product");
const bcrypt = require("bcrypt");



// Create Product
module.exports.createProduct = (reqBody) => {
	let newProduct = new Product({
		name: reqBody.name,
		description: reqBody.description,
		price: reqBody.price,
		picture: reqBody.picture
	});

	return newProduct.save().then((result, error) => {
		if (error){
			return false
		} else {
			return true
		}
	}).catch(err => err);
};



// Get All Active Job Seeker
module.exports.getAllActive = () => {
	return Product.find({isActive: true}).then(result => result).catch(err => err)
};



// Delete Product
module.exports.deleteProduct = (reqParams) => {
	return Product.deleteOne({_id: reqParams}).then(result => {
		if (result){
			return true
		} else {
			return false
		}
	}).catch(err => err)
};