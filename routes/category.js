const express = require('express');

const router = express.Router();
const auth = require('../midleware/auth');

const categoryCtrl = require('../controllers/category');

router.post('/create',auth, categoryCtrl.create)
router.get('/all',categoryCtrl.getAll)


module.exports = router;