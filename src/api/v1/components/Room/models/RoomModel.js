const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoomSchema = new Schema({
	number: {
		type: Number,
	},
	area: {
		type: Number,
	},
	price: {
		type: Number,
	},
	apartment: {
		type: Schema.Types.ObjectId,
		ref: 'Apartment',
		required: true,
	},
});


module.exports = mongoose.model('Room', RoomSchema);
