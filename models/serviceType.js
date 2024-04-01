const mongoose = require('mongoose');
const schema = mongoose.Schema;

const serviceTypeSchema = new schema({
    type: {
        type: String
    }
})

module.exports = mongoose.model('serviceType', serviceTypeSchema);