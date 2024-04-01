const mongoose = require('mongoose');
const schema = mongoose.Schema;

const roleSchema = new schema({
    role: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('role', roleSchema);