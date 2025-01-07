let express = require('express');
let router = express.Router();
let home = require('../controllers/home.js');

router.get('/', home.index);

module.exports = router;