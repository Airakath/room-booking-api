const mongoose = require('mongoose');
const config = require('./src/config/env.config.js');

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
});