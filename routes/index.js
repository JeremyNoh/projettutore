
var express = require('express');
var router = express.Router();
const db = require('../db/init')

/* GET home page. */
router.get('/', function(req, res, next) {
	db.user.sync().then(() => {
		 db.user.create({
  	firstname: 'Jeremy',
  	lastname: 'nohile',
  	email: 'jeremy.nohile@gmail.com'
  	}).then(user => {
  		res.json({user: user})
  })
})

});

module.exports = router;
