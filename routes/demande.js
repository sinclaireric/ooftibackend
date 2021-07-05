const express = require('express');

const router = express.Router();
const auth = require('../midleware/auth');

const demandeCtrl = require('../controllers/demande');

router.post('/create',auth, demandeCtrl.create)
router.get('/all',auth, demandeCtrl.getAll)


module.exports = router;