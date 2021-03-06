const express = require('express')
const router = express.Router()

const { authMiddleware, requireSignin } = require('../controllers/auth')

const { read, publicProfile } = require('../controllers/user')

router.get('/user/profile', requireSignin, authMiddleware, read)
router.get('/user/:username', publicProfile)

module.exports = router