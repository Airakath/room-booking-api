const config = require('src/config/env.config.js');

const router = (app) => {

    app.use((req, res) => {
		res.status(404).json({ error: 'Not Found' });
	});   

};

module.exports = router;