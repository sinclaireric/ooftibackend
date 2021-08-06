const express = require('express');

const router = express.Router();
const auth = require('../midleware/auth');
const productCtrl = require('../controllers/product');

router.post('/create',auth, productCtrl.create)
router.get('/all',auth, productCtrl.getAll)


module.exports = router;