const Booking = require('./models/BookingModel');
const Apartment = require('../Apartment/models/ApartmentModel');
const Client = require('../Client/models/ClientModel');
const RoomModel = require('../Room/models/RoomModel');

//READ all
exports.readAll = (req, res) => {
	Booking.find()
		.exec()
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => {
			res.status(400).json(err);
		});
};

//Create one
exports.createOne = async (req, res) => {
	try {	
		const bookingExist = await Booking.findOne({
			client: req.body.client,
		});
		if(bookingExist) return res.status(400).json({
			error: {
				userMessage: 'Vous disposez déjà d\'une réservation, votre demande n\'a pas pu aboutir',
				internalMessage: 'booking already existe',
			},
		});

		const booking = await new Booking(req.body).save();

		res.status(201).json(booking);

	} catch (err) {
		res.status(400).json(err);
	}
};

//Read one by Id
exports.readOneById = (req, res) => {
	Booking.findById(req.params.id)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => {
			res.status(400).json(err);
		});
};

//Read one by client Id
exports.readOneByClientId = (req, res) => {
	Booking
		.findOne({
			client: req.params.id
		})
		.populate({ 
			path: 'client', 
			model: Client
		})
		.populate({ 
			path: 'room', 
			model: RoomModel,
			populate: {
				path: 'apartment', 
				model: Apartment,				
			}
		})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => {
			res.status(400).json(err);
		});
};

//UPADTE one by Id
exports.updateOneById = (req, res) => {
	Booking.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.exec()
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => {
			res.status(400).json(err);
		});
};

//DELETE one by Id
exports.deleteOneById = (req, res) => {
	Booking.findByIdAndRemove(req.params.id)
		.exec()
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => {
			res.status(400).json(err);
		});
};