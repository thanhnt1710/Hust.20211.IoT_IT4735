const Admin = require('../models/admin.model')

const getAdminDb = async (query) => {
    const admin = await Admin.findOne(query)

    return admin
}

module.exports = {
    getAdminDb
}