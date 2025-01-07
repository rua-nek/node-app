var express = require('express');
var router = express.Router();
var users = require('./users');
var home = require('./home.js');
var vatlieu = require('./vatlieu.js');
var ncc = require('./ncc.js');
var hopdong = require('./hopdong.js');
var duan = require('./duan.js');
const Account = require('../models/account');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res, next) {
  const newAccount = new Account({
    username: 'admin@gmail.com',
    password: 123456,
  });
  newAccount.save()

});
router.use('/users', users);
router.use('/home', home);
router.use('/duan', duan);
router.use('/hopdong', hopdong);
router.use('/vatlieu', vatlieu);
router.use('/ncc', ncc);

module.exports = router;
