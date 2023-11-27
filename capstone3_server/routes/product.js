// Modules
const express = require("express");
const productController = require("../controllers/productController");
const auth = require("../auth");
const {verify, verifyAdmin} = auth;

// Routing Component
const router = express.Router();

// ROUTER: Create Job Seeker
router.post("/createProduct", verify, verifyAdmin, (req, res) => {
	productController.createProduct(req.body).then(result => res.send(result))
});

// ROUTER: Get All Active Job Seekers
router.get("/active", (req, res) => {
	productController.getAllActive().then(result => res.send(result))
});

// ROUTER: Delete Product (Admin)
router.delete('/delete/:productId', verify, verifyAdmin, (req, res) => {
	productController.deleteProduct(req.params.productId).then(result => res.send(result))
});

module.exports = router;