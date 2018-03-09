require('dotenv').config()
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);

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
