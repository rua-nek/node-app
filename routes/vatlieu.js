const express = require('express');
const router = express.Router();
const vatlieu = require('../controllers/vatlieu.js');

router.get('/edit/:id', vatlieu.editvatlieu);
router.post('/update/:id', vatlieu.updatevatlieu);
router.get('/delete/:id', vatlieu.deletevatlieu);
router.post('/add-vatlieu', vatlieu.createvatlieu);
router.get('/add-vatlieu', vatlieu.addvatlieu);
router.get('/', vatlieu.index);

module.exports = router;