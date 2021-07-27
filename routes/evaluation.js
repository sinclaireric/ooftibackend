const express = require('express');

const router = express.Router();
const auth = require('../midleware/auth');
const multer = require('../midleware/multer-configpdf');

const evaluationCtrl = require('../controllers/evaluation');

 router.post('/create',auth, evaluationCtrl.create)


module.exports = router;