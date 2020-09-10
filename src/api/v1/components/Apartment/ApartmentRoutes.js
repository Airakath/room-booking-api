const express = require('express');
const ApartmentController = require('./ApartmentController');

const router = express.Router();

router.route('/apartments')

	.get([
		ApartmentController.readAll
	])

	.post([
		ApartmentController.createOne
	])

router.route('/apartments/:id')

	.get([
		ApartmentController.readOneById
	])

	.patch([
		ApartmentController.updateOneById
	])

	.delete([
		ApartmentController.deleteOneById
	])

	
module.exports = router;





