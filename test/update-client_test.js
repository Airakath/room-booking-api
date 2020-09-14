const assert = require('assert');
const Client = require('../src/api/v1/components/Client/models/ClientModel');

describe('Test Client UPDATE', () => {
    let client1;
    let email = 'test2@test.com'
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

    function assertEmail(promise, done) {
        promise.then( () => {
          Client.find({}).then( (client) => {
              assert(client[0].email===email);
              done();
          });  
        })
    }

    
    it('Recherche un client par id et update (findByIdAndUpdate)', (done) => {
        assertEmail(
            Client.findByIdAndUpdate(client1._id,{email:email}),
            done
        );      
    });    



})