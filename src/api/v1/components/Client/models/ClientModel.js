const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientSchema = new Schema({
	firstName: {
		type: String,
		lowercase: true,
		trim: true,
		required: true,
	},
	lastName: {
		type: String,
		lowercase: true,
		trim: true,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
		required: true,
	},
	password: {
		type: String,
		min: 8,
		max: 256,
		trim: true,
		required: true,
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
	}
});


module.exports = mongoose.model('Client', ClientSchema);
