const express = require('express')
const { loginAdmin } = require('../controllers/admin.controller')
const asyncWrap = require('../utils/asyncWrap')

const router = express.Router()

router.post('/login', asyncWrap(loginAdmin))

module.exports = router