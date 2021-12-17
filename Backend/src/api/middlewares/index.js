const auth = require('./auth.middleware')
const authAdmin = require('./authAdmin.middleware')

module.exports = {
    authAdmin,
    auth
}
