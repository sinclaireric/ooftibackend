const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user')


router.post('/createclient',userCtrl.createClient)
router.post('/createstaff',userCtrl.createStaff)
router.post('/createentreprise',userCtrl.createEntreprise)
router.post('/login',userCtrl.login)


module.exports = router;