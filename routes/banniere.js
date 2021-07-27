const express = require('express');
const multer = require('../midleware/multer-config');

const router = express.Router();
const auth = require('../midleware/auth');

const banniereCtrl = require('../controllers/banniere');

router.post('/create',auth,multer, banniereCtrl.create)
router.get('/all',auth, banniereCtrl.getAll)
router.get('/:id', banniereCtrl.getOne) 


module.exports = router;