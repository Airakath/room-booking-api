const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
	client: {
		type: Schema.Types.ObjectId,
		ref: 'Client',
		required: true,
	},
	room: {
		type: Schema.Types.ObjectId,
		ref: 'Room',
		required: true,
	},
	date: {
		type: Date,
		default: new Date(),
	},
});

module.exports = mongoose.model('Booking', BookingSchema);
