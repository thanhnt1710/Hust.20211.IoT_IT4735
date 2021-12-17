require('dotenv-safe').config()

const port = process.env.PORT
const jwtKey = process.env.JWT_KEY
const mongodbUri = process.env.MONGODB_URI

const userConfig = {
  genders: {
    MALE: 'Male',
    FEMALE: 'Female',
    OTHER: 'Other'
  }
}

module.exports = {
  pagination: {
    page: 1,
    records: 10
  },
  port,
  mongodbUri,
  jwtKey,
  userConfig
}
