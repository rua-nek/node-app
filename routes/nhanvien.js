const express = require('express');
const router = express.Router();
const nhanvien = require('../controllers/nhanvien.js');

router.get('/edit/:id', nhanvien.editnhanvien);
router.post('/update/:id', nhanvien.updatenhanvien);
router.get('/delete/:id', nhanvien.deletenhanvien);
router.post('/add-nhanvien', nhanvien.createnhanvien);
router.get('/add-nhanvien', nhanvien.addnhanvien);

router.get('/', nhanvien.index);
module.exports = router;