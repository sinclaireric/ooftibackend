const express = require('express');

const router = express.Router();
const auth = require('../midleware/auth');

const devisCtrl = require('../controllers/devis');

router.post('/create',auth, devisCtrl.create)
router.get('/all',auth, devisCtrl.getAll)


module.exports = router;