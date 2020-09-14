const express = require('express');
const passport = require('passport');
require('src/api/v1/components/Auth/middlewares/passport');
const ApartmentController = require('./ApartmentController');


const router = express.Router();

router.route('/apartments')

	.get([
		passport.authenticate('jwt', {session: false}),
		ApartmentController.readAll
	])

	.post([
		passport.authenticate('jwt', {session: false}),
		ApartmentController.createOne
	])

router.route('/apartments/rooms')

	.get([
		passport.authenticate('jwt', {session: false}),
		ApartmentController.readAllWithRooms
	])

router.route('/apartments/freerooms')

	.get([
		ApartmentController.readAllWithFreeRooms
	])

router.route('/apartments/:id')

	.get([
		passport.authenticate('jwt', {session: false}),
		ApartmentController.readOneById
	])

	.patch([
		passport.authenticate('jwt', {session: false}),
		ApartmentController.updateOneById
	])

	.delete([
		passport.authenticate('jwt', {session: false}),
		ApartmentController.deleteOneById
	])
	
module.exports = router;





