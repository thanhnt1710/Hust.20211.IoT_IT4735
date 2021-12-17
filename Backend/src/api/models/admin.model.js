const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
	username: {
		type: String,
		trim: true,
		maxlength: 50,
		required: true,
		unique: true
	},
	password: {
		type: String,
		trim: true,
		required: true
	}
}, {
    timestamps: true
})

module.exports = mongoose.Schema('Admin', adminSchema)
