const mongoose = require('mongoose')

const deviceSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.Schema('Device', deviceSchema)
