const mongoose = require('mongoose');
const schema = mongoose.Schema;

const rateTypeSchema = new schema({
    type: {
        type: String
    }
})

module.exports = mongoose.model('rateType', rateTypeSchema);