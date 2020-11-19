require('dotenv').config();
const pgp = require('pg-promise')({});
// Preparing the connection details:
const cn = process.env.DATABASE_URL;
console.log('cnsgdhjs', cn);
// Creating a new database instance from the connection details:
const db = pgp(cn);
// Exporting the database object for shared use:
module.exports = db;

// const dotenv = require('dotenv').config();
// const pgPromise = require('pg-promise');

// let databaseUrl = process.env.PROD_DB_URL;
// let options = {};

// if (process.env.NODE_ENV === 'test') {
// 	databaseUrl = process.env.DATABASE_URL;
// 	options = { connectionString: databaseUrl };
// } else {
// 	options = {
// 		connectionString: databaseUrl,
// 		ssl: { rejectUnauthorized: false },
// 	};
// }

// const db = new pgPromise.Pool(options);

// module.exports = db;

// const pgPromise = require('pg-promise');

// const pgp = pgPromise({}); // Empty object means no additional config required

// const config = {
//     host: process.env.POSTGRES_HOST,
//     port: process.env.POSTGRES_PORT,
//     database: process.env.POSTGRES_DB,
//     user: process.env.POSTGRES_USER,
//     password: process.env.POSTGRES_PASSWORD
// };

// const db = pgp(config);

// exports.db = db;
