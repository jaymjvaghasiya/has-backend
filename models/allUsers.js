const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userModel = new schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: schema.Types.ObjectId,
        ref: 'role'
    },
    id: {
        type: String
    }
})

module.exports = mongoose.model('allusers', userModel);