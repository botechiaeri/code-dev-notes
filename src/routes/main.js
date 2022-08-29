const mainController = require('./../controllers/mainController.js')
const express = require('express')
const router = express.Router()

router.get('/', mainController.home)
//drouter.get('/users', mainController.createUser//)

//router.post('/', mainController.create)
module.exports = router