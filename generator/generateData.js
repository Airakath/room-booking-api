require('app-module-path').addPath(__dirname);
const mongoose = require('mongoose');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});
const FakeApartmentGenerator = require('./apartment/FakeApartmentGenerator');
const config = require('../src/config/env.config.js');


mongoose.connect(`mongodb://${config.db_user}:${config.db_password}@${config.db_host}:${config.db_port}/${config.db_name}`, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error during database connexion !'));
db.once('open', () => {
    console.log(`connected to database ${config.db_name} Success !`);
    
    let iteration = 0;
    const fakeApartmentGenerator = new FakeApartmentGenerator();

    fakeApartmentGenerator.once('start', () => {
        console.log('démarrage de la génération des appartements');     
    });

    fakeApartmentGenerator.on('roomCreated', nb => {
		console.log(`chambre numéro ${nb} créée`);
	});
    
    fakeApartmentGenerator.on('apartmentCreated', nb => {
		console.log(`appartement numéro ${nb} créé`);
		if (iteration == nb) {
			fakeApartmentGenerator.emit('end', nb);
		}
	});

    fakeApartmentGenerator.on('end', (nb) => {
        console.log('La génération des appartements est terminée avec succès!');   
        console.log(`${nb} appartement générés`); 
    });

    fakeApartmentGenerator.on('error', (error) => {
        console.log(`erreur: ${error.message}`);
    });

    rl.question('Conbien d\'appartement voulez-vous générer ?', (answer) => {
        iteration = answer;
        rl.close();

        let i = 0;   
        function createApartment() {
            fakeApartmentGenerator.createApartment();
            i++;   
            setTimeout(() => {    
                if(i < iteration) createApartment();
            }, 0);
        }        
        createApartment();
    });    
});

