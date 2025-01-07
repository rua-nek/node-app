const express = require('express');
const router = express.Router();
const ncc = require('../controllers/ncc.js');

router.get('/edit/:id', ncc.editncc);
router.post('/update/:id', ncc.updatencc);
router.get('/delete/:id', ncc.deletencc);
router.post('/add-ncc', ncc.createncc);
router.get('/add-ncc', ncc.addncc);
router.get('/', ncc.index);

module.exports = router;