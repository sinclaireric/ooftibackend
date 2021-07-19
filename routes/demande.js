const express = require('express');

const router = express.Router();
const auth = require('../midleware/auth');

const demandeCtrl = require('../controllers/demande');

router.post('/create',auth, demandeCtrl.create)
router.get('/details/:id',auth, demandeCtrl.getOne) 
router.get('/all',auth, demandeCtrl.getAll)
router.get('/client',auth, demandeCtrl.getClient)
router.get('/pro',auth, demandeCtrl.getPro)
router.put('/valid',auth, demandeCtrl.valid)


module.exports = router;