const { StatusCodes } = require('http-status-codes')

const APIStatus = require('../constants/APIStatus')
const {
  updateUserInfoDb,
  updateUserAvatarDb,
} = require('../db/user.db')
const apiResponse = require('../utils/apiResponse')
const uploadImageService = require('../services/uploadImage.service')

const getInfo = async (req, res) => {
  res
    .status(200)
    .json(apiResponse({ status: APIStatus.SUCCESS, data: { user: req.user } }))
}

const updateInfo = async (req, res) => {
  const { firstName, lastName, gender, dateOfBirth } = req.body
  const newInfo = {
    firstName: firstName || req.user.firstName,
    lastName: lastName || req.user.lastName,
    gender: gender || req.user.gender,
    dateOfBirth: dateOfBirth || req.user.dateOfBirth
  }

  const rs = await updateUserInfoDb({ _id: req.user._id, newInfo })

  if (!rs) {
    return res.status(StatusCodes.BAD_REQUEST).json(
      apiResponse({
        status: APIStatus.FAIL,
        msg: 'Cannot update user info'
      })
    )
  }

  {
    const {
      _id,
      role,
      status,
      username,
      email,
      firstName,
      lastName,
      gender,
      dateOfBirth
    } = rs._doc

    return res.status(StatusCodes.OK).json(
      apiResponse({
        status: APIStatus.SUCCESS,
        msg: 'Update user info successfully',
        data: {
          _id,
          role,
          status,
          username,
          email,
          firstName,
          lastName,
          gender,
          dateOfBirth
        }
      })
    )
  }
}

const uploadAvatar = async (req, res) => {
  const { avatar } = req.files

  const avatarLink = await uploadImageService(avatar, '/images/avatar')

  if (!avatarLink) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
      apiResponse({
        status: APIStatus.ERROR,
        msg: 'cannot upload avatar'
      })
    )
  }

  const updatedUser = await updateUserAvatarDb({
    _id: req.user._id,
    avatar: avatarLink
  })
  if (!updatedUser) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
      apiResponse({
        status: APIStatus.ERROR,
        msg: 'cannot update avatar'
      })
    )
  }

  res.status(StatusCodes.OK).json(
    apiResponse({
      status: APIStatus.SUCCESS,
      data: {
        user: updatedUser
      }
    })
  )
}

module.exports = {
  getInfo,
  updateInfo,
  updatePassword,
  uploadAvatar,
}
