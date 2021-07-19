const express = require('express');

const router = express.Router();
const auth = require('../midleware/auth');

const clientCtrl = require('../controllers/client')

router.get('/all',auth, clientCtrl.getAll)
router.get('/:id',auth, clientCtrl.getOne)


module.exports = router;