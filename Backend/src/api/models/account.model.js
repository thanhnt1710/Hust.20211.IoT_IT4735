const mongoose = require("mongoose")

const accountSchema = new mongoose.Schema({
	email: {
		type: String,
		trim: true,
		lowercase: true,
		required: true,
		unique: true
	},
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

module.exports = mongoose.model('Account', accountSchema)

