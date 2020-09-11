const EventEmitter = require('events').EventEmitter;
const faker = require('faker');
const Apartment = require('../../src/api/v1/components/Apartment/models/ApartmentModel');
const Room = require('../../src/api/v1/components/Room/models/RoomModel');

// sets locale to fr
faker.locale = "fr";

class FakeApartmentGenerator extends EventEmitter {
	constructor() {
		super();
		this.nbRoomCreated = 0;
		this.nbApartmeentCreated = 0;
	}

	async createApartment() {
		try {
			this.emit('start');

			const nbChambre = Math.floor(Math.random() * (6 - 2)) + 2;

			const apartment = await new Apartment({
				name: faker.random.words(),
				street: faker.address.streetAddress(),
				zipCode: faker.address.zipCode(),
				city: faker.address.city(),
			}).save();

			if (!apartment) {
				throw new Error('apartment save failed');
			}

			this.emit('apartmentCreated', ++this.nbApartmeentCreated);

			for (let i = 1; i <= nbChambre; i++) {
				let room = new Room({
					number: i,
					area: Math.random() * (40.0 - 9.0) + 9.0,
					price: Math.floor(Math.random() * (1200000 - 350000)) + 350000,
					apartment: apartment._id,
				})

				room
					.save()
					.then(res => {
						this.emit('roomCreated', ++this.nbRoomCreated);	
					})
					.catch(err => {
						throw new Error('room save failed');
					})
			}

			
		} catch (err) {
			this.emit('error', err);
		}
	}
}

module.exports = FakeApartmentGenerator;

