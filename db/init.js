const Sequelize = require('sequelize');

const path = process.env.DATABASE_URL || 'postgres://jeremynoh@localhost:5432/projettutore'
const sequelize = new Sequelize(path);

var db = {}

db.user = sequelize.define('user', {
	firstname: Sequelize.STRING,
	lastname: Sequelize.STRING,
	email: Sequelize.STRING,
});

sequelize
.authenticate()
.then(() => {
	console.log('connection has been etablished succesfully');
})
.catch (err => {
	console.error("unable to connect the database:", err);
})

module.exports = db;
