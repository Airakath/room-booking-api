const express = require('express');
const ClientController = require('./ClientController');


const router = express.Router();

router.route('/clients')

	.get([
		ClientController.readAll
	])

	.post([
		ClientController.createOne
	])

router.route('/clients/:id')

	.get([
		ClientController.readOneById
	])

	.patch([
		ClientController.updateOneById
	])

	.delete([
		ClientController.deleteOneById
	])

	
module.exports = router;





