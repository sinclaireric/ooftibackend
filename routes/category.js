const express = require('express');
const multer = require('../midleware/multer-config');

const router = express.Router();
const auth = require('../midleware/auth');

const categoryCtrl = require('../controllers/category');

router.post('/create',auth,multer, categoryCtrl.create)
router.get('/all',categoryCtrl.getAll)


module.exports = router;