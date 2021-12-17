const express = require('express')
const { ValidationError } = require('express-validation')
const fileUpload = require('express-fileupload')
const path = require('path')

const APIStatus = require('./src/api/constants/APIStatus')
const { port } = require('./src/configs/config')
const userRouter = require('./src/api/routes/user.route')
const apiResponse = require('./src/api/utils/apiResponse')

require('./src/api/db/mongoose')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload({ parseNested: true }))
app.use(express.static(path.join(__dirname, './src/api/static')))

app.use('/api/users', userRouter)

app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res
      .status(err.statusCode)
      .json(
        apiResponse({
          status: APIStatus.FAIL,
          msg: 'validation failed',
          data: { details: err.details },
        })
      )
  }

  return res
    .status(500)
    .json(
      apiResponse({ status: APIStatus.ERROR, msg: 'Internal Server error' })
    )
})

app.listen(port, () => {
  console.log(`Server is lisening on port ${port}`)
})

module.exports = app
