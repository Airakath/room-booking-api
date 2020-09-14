const assert = require('assert');
const Client = require('../src/api/v1/components/Client/models/ClientModel');

describe('Test Client READ', () => {
    let client;
    beforeEach( done => {
        client = new Client({
			firstName: 'Laura',
			lastName: 'Dufour',
			email: 'test@test.fr',
			password: 'testtest',
			phone: '0600000000',
			birthDate: '1993-07-23T22:00:00.000Z',
			nationality: 'France',
		});
		client.save()
			.then(() => {
				done();
			})
			.catch(error => {
				done(error);
			});        
    })
    
	it('Recherche de client par ObjectId', done => {
        Client.findById(client._id)
            .then(result => {
                assert(result._id.equals(client._id));
                done();
            })
            .catch(error => {
                done(error);
            });
	});

});
