const express = require('express');

const router = express.Router();
const auth = require('../midleware/auth');

const abonnementCtrl = require('../controllers/abonnement')

router.get('/all',auth, abonnementCtrl.getAll)
router.post('/create',auth, abonnementCtrl.create)


module.exports = router;