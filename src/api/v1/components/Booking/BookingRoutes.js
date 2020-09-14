const express = require('express');
const passport = require('passport');
require('src/api/v1/components/Auth/middlewares/passport');
const BookingController = require('./BookingController');

const router = express.Router();

router.route('/bookings')

	.get([
		passport.authenticate('jwt', {session: false}),
		BookingController.readAll
	])

	.post([
		passport.authenticate('jwt', {session: false}),
		BookingController.createOne
	])

router.route('/bookings/:id')

	.get([
		passport.authenticate('jwt', {session: false}),
		BookingController.readOneById
	])

	.patch([
		passport.authenticate('jwt', {session: false}),
		BookingController.updateOneById
	])

	.delete([
		passport.authenticate('jwt', {session: false}),
		BookingController.deleteOneById
	])
	
module.exports = router;





