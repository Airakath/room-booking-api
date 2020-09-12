const express = require('express');
const AuthController = require('./AuthController');

const router = express.Router();

router.route('/signup')
	.post([
		AuthController.signup
	]);
	
router.route('/signin')
	.post([
		AuthController.signin
	]);	
	

module.exports = router;