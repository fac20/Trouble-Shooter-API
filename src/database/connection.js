const dotenv = require('dotenv').config();
const pg = require('pg');

let databaseUrl = process.env.PROD_DB_URL;
let options = {};

if (process.env.NODE_ENV === 'test') {
	databaseUrl = process.env.DATABASE_URL;
	options = { connectionString: databaseUrl };
} else {
	options = {
		connectionString: databaseUrl,
		ssl: { rejectUnauthorized: false },
	};
}

const db = new pg.Pool(options);

module.exports = db;
