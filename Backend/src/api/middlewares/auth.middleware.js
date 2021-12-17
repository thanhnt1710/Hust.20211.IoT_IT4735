const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')

const { jwtKey } = require('../../configs')
const { getAccountDb } = require('../db/account.db')
const User = require('../models/user.model')
const apiResponse = require('../utils/apiResponse')
const APIStatus = require('../constants/APIStatus')


const decodeAccountToken = async (token) => {
  try {
    const decode = jwt.verify(token, jwtKey)
    const account = await getAccountDb({ _id: decode._id })

    return account
  } catch (error) {
    return null
  }
}

const auth = async (req, res, next) => {
  const originalToken =
    req.header('Authorization') || req.header('x-access-token')
  if (!originalToken) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json(
        apiResponse({ status: APIStatus.FAIL, msg: 'You dont have permission' })
      )
  }

  const token = originalToken.replace('Bearer ', '')
  const account = await decodeAccountToken(token)
  if (!account) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(apiResponse({ status: APIStatus.FAIL, msg: 'Invalid token' }))
  }

  const user = await new User({accountId: account._id}).save()

  req.user = user

  next()
}

module.exports = auth
