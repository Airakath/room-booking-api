const express = require('express');
const passport = require('passport');
require('src/api/v1/components/Auth/middlewares/passport');
const ClientController = require('./ClientController');


const router = express.Router();

router.route('/clients')

	.get([
		passport.authenticate('jwt', {session: false}),
		ClientController.readAll
	])

	.post([
		passport.authenticate('jwt', {session: false}),
		ClientController.createOne
	])

router.route('/clients/:id')

	.get([
		passport.authenticate('jwt', {session: false}),
		ClientController.readOneById
	])

	.patch([
		passport.authenticate('jwt', {session: false}),
		ClientController.updateOneById
	])

	.delete([
		passport.authenticate('jwt', {session: false}),
		ClientController.deleteOneById
	])

	
module.exports = router;





