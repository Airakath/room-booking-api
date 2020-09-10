module.exports = {
	apps: [
		{
			script: 'server.js',

			// Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
			exec_mode: 'cluster',
			instances: 1,
			autorestart: true,
			watch: false,
			max_memory_restart: '1G',
			log_date_format: 'HH:mm:ss DD-MM-YYYY',
			error_file: 'logs/err.log',
			out_file: 'logs/out.log',
			log_file: 'logs/combined.log',

			env: {
				name: 'roombooking-dev',
				NODE_ENV: 'development',
				ROOT_API: '/api/v1/',
				PORT: 3000,

				FORMAT_LOGS: 'dev',

				DB_DIALECT: 'mongodb',
				DB_HOST: 'localhost',
				DB_PORT: '27017',
				DB_NAME: 'roombooking-dev',
				DB_USER: 'roombooking',
				DB_PASSWORD: 'password',

				SSL_CERT_URL: 'cert/server.crt',
				SSL_KEY_URL: 'cert/server.key',
				SSL_CHAIN_URL: 'cert/server.csr',
			},
			env_production: {
				name: 'roombooking-prod',
				NODE_ENV: 'production',
				ROOT_API: '/api/v1/',
				PORT: 3000,

				FORMAT_LOGS: 'common',

				DB_DIALECT: 'mongodb',
				DB_HOST: 'mongodb',
				DB_PORT: '27017',
				DB_NAME: 'roombooking-prod',
				DB_USER: 'roombooking',
				DB_PASSWORD: 'password',

				SSL_CERT_URL: '/home/roombooking.com/domains/api.roombooking.com/ssl.cert',
				SSL_KEY_URL: '/home/roombooking.com/domains/api.roombooking.com/ssl.key',
				SSL_CHAIN_URL: '/home/roombooking.com/domains/api.roombooking.com/ssl.ca',
			},
		},
	],
};
