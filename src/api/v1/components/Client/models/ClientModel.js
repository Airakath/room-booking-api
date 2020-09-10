const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientSchema = new Schema({
	firstName: {
		type: String,
		trim: true,
	},
	lastName: {
		type: String,
		trim: true,
	},
	email: {
		type: String,
		trim: true,
	},
	phone: {
		type: String,
		trim: true,
	},
	birthDate: {
		type: Date,
		trim: true,
	},
	nationality: {
		type: String,
		trim: true,
	},
});


module.exports = mongoose.model('Client', ClientSchema);
