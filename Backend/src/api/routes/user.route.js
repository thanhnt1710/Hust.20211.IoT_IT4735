const express = require('express')

const asyncWrap = require('../utils/asyncWrap')
const {  getInfo, updateInfo, uploadAvatar} = require('../controllers/user.controller')
const { auth } = require('../middlewares/auth.middleware')

const router = express.Router()

router.get('/info', auth, asyncWrap(getInfo))
router.put('/info', auth, asyncWrap(updateInfo))
router.post('/avatar', auth, asyncWrap(uploadAvatar))

module.exports = router
