const Account = require('../models/account.model')

const createAccountDb = async (query) => {
    const { username, password } = query
    const account = await new Account({username, password}).save()

    return account
}

const updateAccountPasswordDb = async (query) => {
    const { _id, newPassword } = query
    const account = await Account.findOne({ _id })
    if (!account) return null

    account.password = newPassword

    const rs = await account.save()

    return rs
}

const getAccountDb = async (query) => {
    const account = await Account.findOne(query)

    return account
}

module.exports = {
    createAccountDb,
    updateAccountPasswordDb,
    getAccountDb
}