const express = require('express');
const BookingController = require('./BookingController');

const router = express.Router();

router.route('/bookings')

	.get([
		BookingController.readAll
	])

	.post([
		BookingController.createOne
	])

router.route('/bookings/:id')

	.get([
		BookingController.readOneById
	])

	.patch([
		BookingController.updateOneById
	])

	.delete([
		BookingController.deleteOneById
	])
	
module.exports = router;





