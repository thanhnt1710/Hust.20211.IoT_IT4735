const mongoose = require('mongoose')
const { ObjectId } = mongoose.Types
const { userConfig } = require('../../configs')
const { genders } = userConfig

const userSchema = new mongoose.Schema(
  {
    account: {
      type: ObjectId,
      ref: 'Account',
      required: true
    },
    firstName: {
      type: String,
      maxlength: 50
    },
    lastName: {
      type: String,
      maxlength: 50
    },
    avatar: {
      type: String,
      trim: true
    },
    gender: {
      type: String,
      enum: Object.values(genders)
    },
    dateOfBirth: {
      type: Date
    },
    devices: [{type: ObjectId, ref: 'Device'}]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)
