const express = require('express');
const router = express.Router()
const duanController = require('../controllers/duan.js')


router.get('/edit/:id', duanController.editduan);
router.post('/update/:id', duanController.updateduan);
router.get('/delete/:id', duanController.deleteduan);
router.post('/add-duan', duanController.createduan);
router.get('/add-duan', duanController.addduan);
router.get('/', duanController.index);
module.exports = router;