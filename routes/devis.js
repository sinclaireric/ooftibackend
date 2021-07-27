const express = require('express');

const router = express.Router();
const auth = require('../midleware/auth');
const multer = require('../midleware/multer-configpdf');

const devisCtrl = require('../controllers/devis');

router.post('/create',auth,multer, devisCtrl.create)
router.get('/all',auth, devisCtrl.getAll)
router.get('/client',auth, devisCtrl.getClient)


module.exports = router;