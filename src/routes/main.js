const mainController = require('./../controllers/mainController.js')
const express = require('express')
const router = express.Router()

router.get('/', mainController.home)
//router.post('/', mainController.create)
module.exports = router