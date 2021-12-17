const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')

const { getAdminByIdDb } = require('../db/admin.db')
const { jwtKey } = require('../../configs')
const apiResponse = require('../utils/apiResponse')
const APIStatus = require('../constants/APIStatus')

const decodeAdminToken = async (token) => {
    try {
        const decode = jwt.verify(token, jwtKey)
        const admin = await getAdminByIdDb({ _id: decode._id })
    
        return admin
      } catch (error) {
        return null
      }
}

const authAdmin = async (req, res, next) => {
    const originalToken = req.header('Authorization') || req.header('x-access-token')
    if (!originalToken) {
        return res
        .status(StatusCodes.UNAUTHORIZED)
        .json(
            apiResponse({ status: APIStatus.FAIL, msg: 'You dont have permission' })
        )
    }

    const token = originalToken.replace('Bearer ', '')
    const admin = await decodeAdminToken(token)
    if (!admin) {
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(apiResponse({ status: APIStatus.FAIL, msg: 'Invalid token' }))
    }

    req.admin = admin

    next()
}

module.exports = authAdmin
