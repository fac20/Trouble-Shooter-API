const db = require('./src/database/connection');

db.one('SELECT * FROM users WHERE id=1').then((res) => {
	console.log(res);
});
