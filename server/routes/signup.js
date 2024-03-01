const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.get('/', authController.signupGet)
router.post('/', authController.signupPost)
module.exports = router
