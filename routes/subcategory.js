const express = require('express');

const router = express.Router();
const auth = require('../midleware/auth');
const subcategoryCtrl = require('../controllers/subcategory');

router.post('/create',auth, subcategoryCtrl.create)
router.get('/all', subcategoryCtrl.getAll)


module.exports = router;