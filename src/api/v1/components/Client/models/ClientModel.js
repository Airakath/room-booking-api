const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
		required: true,
	},
	birthDate: {
		type: Date,
		trim: true,
		required: true,
	},
	nationality: {
		type: String,
		trim: true,
		required: true,
	},
	role: {
		type: String,
		enum: ['Customer', 'Admin'],
		default: 'Customer',
	},
});

ClientSchema.pre('save', function (next) {
	const client = this;
	bcrypt.genSalt(10, function (err, salt) {
		if (err) {
			return next(err);
		}

		bcrypt.hash(client.password, salt, function (err, hash) {
			if (err) {
				return next(err);
			}
			client.password = hash;
			next();
		});
	});
});

ClientSchema.methods.isPasswordEqualTo = function (passwordReceived, done) {
	bcrypt.compare(passwordReceived, this.password, function (err, isMatch) {
		if (err) return done(err);

		done(null, isMatch);
	});
}; 

module.exports = mongoose.model('Client', ClientSchema);
