const express = require('express');

const router = express.Router();
const auth = require('../midleware/auth');

const entrepriseCtrl = require('../controllers/entreprise')

router.get('/all',auth, entrepriseCtrl.getAll)


module.exports = router;