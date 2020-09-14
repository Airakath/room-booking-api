const express = require('express');
const passport = require('passport');
require('src/api/v1/components/Auth/middlewares/passport');
const RoomController = require('./RoomController');


const router = express.Router();

router.route('/rooms')

	.get([
		passport.authenticate('jwt', {session: false}),
		RoomController.readAll
	])

	.post([
		passport.authenticate('jwt', {session: false}),
		RoomController.createOne
	])

router.route('/rooms/:id')

	.get([
		RoomController.readOneById
	])

	.patch([
		passport.authenticate('jwt', {session: false}),
		RoomController.updateOneById
	])

	.delete([
		passport.authenticate('jwt', {session: false}),
		RoomController.deleteOneById
	])

	
module.exports = router;





