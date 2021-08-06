const express = require('express');
const multer = require('../midleware/multer-config');

const router = express.Router();

const userCtrl = require('../controllers/user')


router.post('/',userCtrl.create)
router.put('/:id',userCtrl.update)
router.post('/login',userCtrl.login)


module.exports = router;