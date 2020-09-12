const Booking = require('./models/BookingModel');

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
exports.createOne = (req, res) => {
	const booking = new Booking(req.body);
	booking
		.save()
		.then(result => {
			res.status(201).json(result);
		})
		.catch(err => {
			res.status(400).json(err);
		});
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