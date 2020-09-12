//Make this global to use all over the application
let CONFIG = {}  

CONFIG.node_env = process.env.NODE_ENV;
CONFIG.root_api = process.env.ROOT_API;
CONFIG.port = process.env.PORT;

CONFIG.format_logs = process.env.FORMAT_LOGS;

CONFIG.db_dialect = process.env.DB_DIALECT;
CONFIG.db_host = process.env.DB_HOST;
CONFIG.db_port = process.env.DB_PORT;
CONFIG.db_name = process.env.DB_NAME;
CONFIG.db_user = process.env.DB_USER;
CONFIG.db_password = process.env.DB_PASSWORD;

CONFIG.jwt_key_secret = process.env.JWT_KEY_SECRET;
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION;
CONFIG.jwt_issuer = process.env.JWT_ISSUER;

CONFIG.ssl_cert_url = process.env.SSL_CERT_URL;
CONFIG.ssl_key_url = process.env.SSL_KEY_URL;
CONFIG.ssl_chain_url = process.env.SSL_CHAIN_URL;

module.exports = CONFIG;