const hashPassword = require('../utils/hashPassword')
const genToken = require('../utils/genToken')

const login = async (req, res) => {
  const { username, password } = req.body

  const user = await getUserDb({ username })
  if (!user) {
    return res.status(StatusCodes.BAD_REQUEST).json(
      apiResponse({
        status: APIStatus.FAIL,
        msg: 'Username or password wrong'
      })
    )
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      const token = genToken(user._id)
      res
        .status(200)
        .json(apiResponse({ status: APIStatus.SUCCESS, data: { token } }))
    } else if (!err) {
      res.status(StatusCodes.BAD_REQUEST).json(
        apiResponse({
          status: APIStatus.FAIL,
          msg: 'Username or password wrong'
        })
      )
    }
  })
}

const signup = async (req, res) => {
  const { email, username, password } = req.body

  const [checkUsername, checkEmail] = await Promise.all([
    getUserDb({ username }),
    getUserDb({ email })
  ])

  if (checkUsername) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(apiResponse({ status: APIStatus.FAIL, msg: 'Username existed' }))
  }
  if (checkEmail) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(apiResponse({ status: APIStatus.FAIL, msg: 'Email existed' }))
  }

  const hashedPw = await hashPassword(password)

  const user = await createUserDb(username, email, hashedPw)
  const token = user.createToken()

  res.status(201).json(
    apiResponse({
      status: APIStatus.SUCCESS,
      msg: 'create new user successfully',
      data: { token }
    })
  )
}

const updatePassword = async (req, res) => {
  const userId = req.user._id
  const { oldPassword, newPassword } = req.body

  const user = await getUserDb({ _id: userId })
  if (!user) {
    return res.status(StatusCodes.BAD_REQUEST).json(
      apiResponse({
        status: APIStatus.FAIL,
        msg: 'user logined does not exist'
      })
    )
  }
  bcrypt.compare(oldPassword, user.password, async (err, result) => {
    if (result) {
      // old password is correct
      const hashedNewPassword = await hashPassword(newPassword)
      updateUserPasswordDb({
        _id: userId,
        newPassword: hashedNewPassword
      })

      return res.status(StatusCodes.OK).json(
        apiResponse({
          status: APIStatus.SUCCESS,
          msg: 'Update user password successfully'
        })
      )
    } else if (!err) {
      // old password is wrong
      res.status(StatusCodes.BAD_REQUEST).json(
        apiResponse({
          status: APIStatus.FAIL,
          msg: 'Wrong old password'
        })
      )
    }
  })
}

const forgetPassword = async (req, res) => {
  //[todo]
}

module.exports = {
  login,
  signup,
  updatePassword,
  forgetPassword
}