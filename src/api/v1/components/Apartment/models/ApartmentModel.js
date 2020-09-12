const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ApartmentSchema = new Schema({
	name: {
		type: String,
		trim: true,
	},
	street: {
		type: String,
		trim: true,
	},
	zipCode: {
		type: String,
		trim: true,
	},
	city: {
		type: String,
		trim: true,
	}
});


module.exports = mongoose.model('Apartment', ApartmentSchema);
