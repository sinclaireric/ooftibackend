const express = require('express');

const router = express.Router();
const auth = require('../midleware/auth');

const staffCtrl = require('../controllers/staff')

router.get('/all',auth, staffCtrl.getAll)


module.exports = router;