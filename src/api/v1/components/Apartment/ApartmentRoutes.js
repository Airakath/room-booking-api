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

router.route('/apartments/rooms')

	.get([
		ApartmentController.readAllWithRooms
	])

router.route('/apartments/freerooms')

	.get([
		ApartmentController.readAllWithFreeRooms
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





