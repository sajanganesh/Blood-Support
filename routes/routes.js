const express = require('express')
const router = express.Router()
const usercontroller = require('../Controller/usercontroller')
const patientcontroller = require('../Controller/patientcontroller')

// or const router = require('express').Router()

router.get('/',patientcontroller.all_patients)
router.post('/user',usercontroller.create_user)
router.post('/create',patientcontroller.create_patient)
router.post('/login',usercontroller.login_user)

module.exports = router;
