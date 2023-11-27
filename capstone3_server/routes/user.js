// Modules
const express = require("express");
const userController = require("../controllers/userController");
const auth = require("../auth");
const {verify, verifyAdmin} = auth;

// Routing Component
const router = express.Router();

// ROUTER: User Register
router.post('/register', (req, res) => {
	userController.register(req.body).then(result => res.send(result))
});

// ROUTER: User Login
router.post('/login', (req, res) => {
	userController.login(req.body).then(result => res.send(result))
});

// ROUTER: User Details
router.get('/details', verify, (req, res) => {
	userController.details(req.user.id).then(result => res.send(result))
});

module.exports = router;