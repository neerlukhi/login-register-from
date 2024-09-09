var express = require('express');
var router = express.Router();
var register = require('../controller/registercontroller')

/* GET home page. */
router.post('/', register.register)
router.post('/login', register.login)

module.exports = router;
