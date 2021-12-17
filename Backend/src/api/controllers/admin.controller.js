const { getAdminDb } = require('../db/admin.db')

const loginAdmin = async (req, res, next) => {
    const { username, password } = req.body
  
    const admin = await getAdminDb({ username })
    if (!admin) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        apiResponse({
          status: APIStatus.FAIL,
          msg: 'Username or password wrong'
        })
      )
    }
  
    bcrypt.compare(password, admin.password, (err, result) => {
      if (result) {
        const token = genToken(admin._id)
        res
          .status(200)
          .json(
            apiResponse({ status: APIStatus.SUCCESS, data: { token } })
          )
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

module.exports = {
    loginAdmin
}