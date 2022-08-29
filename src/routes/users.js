const usersControllers = require('./../controllers/usersController.js')
const express = require('express')
const router = express.Router()

router.get('/', usersControllers.usersCreate)
//router.post('/users', usersControllers.storeUser)
module.exports = router