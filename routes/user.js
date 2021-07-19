const express = require('express');
const multer = require('../midleware/multer-config');

const router = express.Router();

const userCtrl = require('../controllers/user')


router.post('/createclient',userCtrl.createClient)
router.post('/createstaff',userCtrl.createStaff)
router.post('/createentreprise',multer,userCtrl.createEntreprise)
router.post('/login',userCtrl.login)
router.post('/loginapp',userCtrl.loginapp)


module.exports = router;