const assert = require('assert');
const Client = require('../src/api/v1/components/Client/models/ClientModel');

describe('Test Client DELETE', () => {
    let client1;
    beforeEach( done => {
        client1 = new Client({
			firstName: 'Laura',
			lastName: 'Dufour',
			email: 'test@test.fr',
			password: 'testtest',
			phone: '0600000000',
			birthDate: '1993-07-23T22:00:00.000Z',
			nationality: 'France',
		});
		client1.save()
			.then(() => {
				done();
			})
			.catch(error => {
				done(error);
			});        
    })

    function assertDelete(promise, done) {
        promise.then( () => {
            Client.findById(client1._id).then((book) => {
                assert(book===null);
                done();
            });  
        })
    }

    it('Recherche un client par son id et le delete (findByIdAndRemove)', (done) => {
        assertDelete(
            Client.findByIdAndRemove(client1._id),
            done
        );
    });

})