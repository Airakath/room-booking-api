const express = require('express');
const RoomController = require('./RoomController');


const router = express.Router();

router.route('/rooms')

	.get([
		RoomController.readAll
	])

	.post([
		RoomController.createOne
	])

router.route('/rooms/:id')

	.get([
		RoomController.readOneById
	])

	.patch([
		RoomController.updateOneById
	])

	.delete([
		RoomController.deleteOneById
	])

	
module.exports = router;





