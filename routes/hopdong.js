const express = require('express');
const router = express.Router();
const hopdongController = require('../controllers/hopdong.js');

router.get('/edit/:id', hopdongController.edithopdong);
router.post('/update/:id', hopdongController.updatehopdong);
router.get('/delete/:id', hopdongController.deletehopdong);
router.post('/add-hopdong', hopdongController.createhopdong);
router.get('/add-hopdong', hopdongController.addhopdong);
router.get('/', hopdongController.index);

module.exports = router;