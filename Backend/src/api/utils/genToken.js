const jwt = require('jsonwebtoken')
const { jwtKey } = require('../../configs')

const genToken = (_id) => {
    const token = jwt.sign({ _id: _id.toString() }, jwtKey, {
        expiresIn: '10h'
      })
    
    return token
}

module.exports = genToken
