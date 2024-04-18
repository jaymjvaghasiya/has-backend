const mongoose = require('mongoose');
const schema = mongoose.Schema;

const otpModel = new schema({
    otp: {
        type: String,
    },
    email: {
        type: String,
    },
    status: {
        type: Boolean,
    },
    time: {
        type: Number,
        default: Date.now,
    },
})

module.exports = mongoose.model('otp', otpModel);