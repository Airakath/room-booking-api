const assert = require('assert');
const Client = require('../src/api/v1/components/Client/models/ClientModel');

describe('Test Client CREATE', () => {
    
    it('Sauvegarde d\'un client', (done) => {
        const client = new Client({
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
                assert(!client.isNew);
                done();
            })
            .catch(error => {
                done(error);
            });
    })
})