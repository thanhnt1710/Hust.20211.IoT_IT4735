const User = require('../models/user.model')

const getUserDb = async (filter) => {
  const user = await User.findOne(filter)

  return user
}

// get user info without password
const getUserInfoDb = async (filter) => {
  const user = await User.findOne(filter, { password: 0, createdAt: 0, updatedAt: 0 })

  return user
}

const getAllUsersDb = async (query) => {
  const { page, records, filter } = query

  const [totalUsers, users] = await Promise.all([
    User.find(filter).count(),
    User.find(filter, { password: 0, createdAt: 0, updatedAt: 0 })
      .skip((page - 1) * records)
      .limit(records)
  ])

  return {
    users,
    totalUsers
  }
}

const updateUserInfoDb = async (query) => {
  const { _id, newInfo } = query
  const { firstName, lastName, gender, dateOfBirth } = newInfo

  const user = await User.findOne({ _id })
  if (!user) return null

  user.firstName = firstName
  user.lastName = lastName
  user.gender = gender
  user.dateOfBirth = dateOfBirth

  const rs = await user.save()

  return rs
}

const updateUserAvatarDb = async (query) => {
  const { _id, avatar } = query
  const user = await User.findOne({ _id })
  if (!user) return null

  user.avatar = avatar

  const rs = await user.save()

  return rs
}

module.exports = {
  getUserDb,
  getUserInfoDb,
  getAllUsersDb,
  updateUserInfoDb,
  updateUserAvatarDb,
}
