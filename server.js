require('app-module-path').addPath(__dirname);
require('./db');
const config = require('./src/config/env.config.js');
const router = require('./src/api/v1/router');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const fs = require('fs');


let server;
if (config.node_env == 'development') {
	server = require('http').Server(app);
} else {
	server = require('https').Server({
        key: fs.readFileSync(config.ssl_key_url),
        cert: fs.readFileSync(config.ssl_cert_url),
        ca: fs.readFileSync(config.ssl_chain_url),
	},app);
}


//Hearder
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    // Expose the right header
    if (req.method === 'OPTIONS') {
        res.header('Acces-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
        return res.status(200).json({});
    }
    next();
});


//Middelware
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use(morgan(config.format_logs));
app.use(cors());
app.use(helmet());

//Routes
router(app);

server.listen(config.port, () => {
	console.log(`listening on port ${config.port} in ${config.node_env} mode`);
});