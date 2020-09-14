const mongoose = require('mongoose');

before(done => {
	mongoose.connect('mongodb://localhost/roombooking-test', {
		useUnifiedTopology: true,
		useCreateIndex: true,
		useNewUrlParser: true,
		useFindAndModify: false,
	});

	mongoose.connection
		.once('open', () => {
			console.log('Connexion est établie');
			done();
		})
		.on('error', error => {
			console.warn('Erreur durant la connexion', error);
		});
});

beforeEach('Supprime les données', done => {
	mongoose.connection.db.dropDatabase().then(() => {
		done();
	});
});