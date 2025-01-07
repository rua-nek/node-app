var express = require('express');
let users = require('../controllers/users.js');
var router = express.Router();


router.post('/login', users.login);
router.get('/', users.index);
module.exports = router;
